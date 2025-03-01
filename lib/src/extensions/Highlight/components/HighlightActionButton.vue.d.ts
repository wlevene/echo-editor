import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../../type';
import { TooltipContentProps } from 'radix-vue';

interface Props {
    editor: Editor;
    tooltip?: string;
    disabled?: boolean;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    tooltipOptions?: TooltipContentProps;
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    tooltip: undefined;
    disabled: boolean;
    action: undefined;
    tooltipOptions: undefined;
    isActive: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    tooltip: undefined;
    disabled: boolean;
    action: undefined;
    tooltipOptions: undefined;
    isActive: undefined;
}>>>, {
    action: (value?: any) => void;
    isActive: () => boolean;
    tooltip: string;
    disabled: boolean;
    tooltipOptions: TooltipContentProps;
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
