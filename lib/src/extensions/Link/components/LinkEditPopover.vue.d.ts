import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../../type';

interface Props {
    editor: Editor;
    icon?: any;
    title?: string;
    tooltip?: string;
    disabled?: boolean;
    shortcutKeys?: string[];
    isActive?: ButtonViewReturnComponentProps['isActive'];
    action?: ButtonViewReturnComponentProps['action'];
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    title: undefined;
    tooltip: undefined;
    disabled: boolean;
    shortcutKeys: undefined;
    action: undefined;
    isActive: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    title: undefined;
    tooltip: undefined;
    disabled: boolean;
    shortcutKeys: undefined;
    action: undefined;
    isActive: undefined;
}>>>, {
    icon: any;
    action: (value?: any) => void;
    isActive: () => boolean;
    tooltip: string;
    disabled: boolean;
    title: string;
    shortcutKeys: string[];
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
