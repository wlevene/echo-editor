import { DropdownMenuCheckboxItemProps } from 'radix-vue';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<DropdownMenuCheckboxItemProps & {
    class?: any;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (event: Event) => void;
    "update:checked": (payload: boolean) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DropdownMenuCheckboxItemProps & {
    class?: any;
}>>> & {
    onSelect?: ((event: Event) => any) | undefined;
    "onUpdate:checked"?: ((payload: boolean) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
