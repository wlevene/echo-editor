export interface GridSize {
    rows: number;
    cols: number;
}
export interface CreateTablePayload extends GridSize {
    withHeaderRow: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    disabled: {
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "create-table": (payload: CreateTablePayload) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    disabled: {
        default: boolean;
    };
}>> & {
    "onCreate-table"?: ((payload: CreateTablePayload) => any) | undefined;
}, {
    disabled: boolean;
}, {}>, {
    trigger?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
