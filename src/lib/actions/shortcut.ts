/* 
 * MIT LICENSE - Copyright 2023 Quang Phan
 * Code from svelte-put https://github.com/vnphanquang/svelte-put/tree/main/packages/actions/shortcut
 */
import type { ActionReturn } from "svelte/action";

export type ShortcutModifier = 'alt' | 'ctrl' | 'shift' | 'meta';

export interface ShortcutTrigger {
    enabled?: boolean;
    modifier?: ShortcutModifier | ShortcutModifier[];
    id?: string;
    key: string;
    callback: (event: ShortcutEventDetail) => void;
    preventDefault?: boolean;
}

export interface ShortcutParam {
    enabled?: boolean;
    trigger: ShortcutTrigger[];
    type?: 'keydown' | 'keyup';
}

export interface ShortcutEventDetail{
    node: HTMLElement;
    trigger: ShortcutTrigger;
}

export function shortcut(node: HTMLElement, param: ShortcutParam): ActionReturn<ShortcutParam> {
    let { enabled = true, trigger, type = 'keydown' } = param;

    function handler(event: KeyboardEvent) {
        const normalizedTriggers = Array.isArray(trigger) ? trigger : [trigger];

        /** @type {Record<import('./public').ShortcutModifier, boolean>} */
        const modifiedMap = {
            alt: event.altKey,
            ctrl: event.ctrlKey,
            shift: event.shiftKey,
            meta: event.metaKey,
        };
        for (const trigger of normalizedTriggers) {
            const mergedTrigger = {
                modifier: [],
                preventDefault: false,
                enabled: true,
                ...trigger,
            };

            const { modifier, key, callback, preventDefault, enabled: triggerEnabled } = mergedTrigger;
            if (triggerEnabled) {
                if (modifier.length) {
                    const modifierDefs = (Array.isArray(modifier) ? modifier : [modifier]).map((def) =>
                        typeof def === 'string' ? [def] : def,
                    );

                    const modified = modifierDefs.some((def) =>
                        def.every((modifier) => modifiedMap[modifier]),
                    );
                    if (!modified) continue;
                }
                if (event.key === key) {
                    if (preventDefault) event.preventDefault();

                    const detail: ShortcutEventDetail = { node, trigger: mergedTrigger };
                    node.dispatchEvent(new CustomEvent('ath-shortcut', { detail }));
                    callback?.(detail);
                }
            }
        }
    }

    if (enabled) {
        node.addEventListener(type, handler);
    }

    return {
        update: (update) => {
            const { enabled: newEnabled = true, type: newType = 'keydown' } = update;

            if (enabled && (!newEnabled || type !== newType)) {
                node.removeEventListener(type, handler);
            } else if (!enabled && newEnabled) {
                node.addEventListener(newType, handler);
            }

            enabled = newEnabled;
            type = newType;
            trigger = update.trigger;
        },
        destroy: () => {
            node.removeEventListener(type, handler);
        },
    };
}