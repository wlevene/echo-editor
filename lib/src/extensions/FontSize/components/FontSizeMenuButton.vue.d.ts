import { StyleValue } from 'vue';
import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../../type';

export interface Item {
    title: string;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: StyleValue;
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface Props {
    editor: Editor;
    disabled?: boolean;
    color?: string;
    shortcutKeys?: string[];
    maxHeight?: string | number;
    tooltip?: string;
    items?: Item[];
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    shortcutKeys: undefined;
    items: () => never[];
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    shortcutKeys: undefined;
    items: () => never[];
}>>>, {
    color: string;
    tooltip: string;
    disabled: boolean;
    shortcutKeys: string[];
    items: Item[];
    maxHeight: string | number;
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
