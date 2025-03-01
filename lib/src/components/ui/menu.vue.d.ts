interface MenuItem {
    label: string;
    isHovered?: boolean;
    isSelected?: boolean;
    children?: MenuItem[];
    [key: string]: any;
}
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    items: MenuItem[];
}>, {
    handleKeyDown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemClick: (item: MenuItem) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    items: MenuItem[];
}>>> & {
    onItemClick?: ((item: MenuItem) => any) | undefined;
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
