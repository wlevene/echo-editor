import { DropdownMenuSubContentProps } from 'radix-vue';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<DropdownMenuSubContentProps & {
    class?: any;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: import('radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => void;
    entryFocus: (event: Event) => void;
    openAutoFocus: (event: Event) => void;
    focusOutside: (event: import('radix-vue/dist/DismissableLayer').FocusOutsideEvent) => void;
    interactOutside: (event: import('radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('radix-vue/dist/DismissableLayer').FocusOutsideEvent) => void;
    closeAutoFocus: (event: Event) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DropdownMenuSubContentProps & {
    class?: any;
}>>> & {
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEntryFocus?: ((event: Event) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
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
