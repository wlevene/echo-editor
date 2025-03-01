import { HTMLAttributes } from 'vue';
import { SplitterResizeHandleProps } from 'radix-vue';

declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<SplitterResizeHandleProps & {
    class?: HTMLAttributes['class'];
    withHandle?: boolean | undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dragging: (isDragging: boolean) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToRuntimeProps<SplitterResizeHandleProps & {
    class?: HTMLAttributes['class'];
    withHandle?: boolean | undefined;
}>>> & {
    onDragging?: ((isDragging: boolean) => any) | undefined;
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
