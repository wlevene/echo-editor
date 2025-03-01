import { Editor } from '@tiptap/core';

interface Props {
    editor: Editor;
    disabled?: boolean;
    containerRef: HTMLElement | null;
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    containerRef: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    find: (...args: any[]) => void;
    replace: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    containerRef: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReplace?: ((...args: any[]) => any) | undefined;
    onFind?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    containerRef: HTMLElement | null;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
