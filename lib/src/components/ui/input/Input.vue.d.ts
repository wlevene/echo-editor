import { HTMLAttributes } from 'vue';

declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | number | undefined;
    modelValue?: string | number | undefined;
    class?: HTMLAttributes['class'];
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: string | number) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    defaultValue?: string | number | undefined;
    modelValue?: string | number | undefined;
    class?: HTMLAttributes['class'];
}>>> & {
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}, {}, {}>;
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
