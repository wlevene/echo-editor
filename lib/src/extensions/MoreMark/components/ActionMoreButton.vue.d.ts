import { StyleValue } from 'vue';
import { icons } from '../../../components/icons';
import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../../type';

export interface Item {
    title: string;
    icon?: keyof typeof icons;
    isActive: NonNullable<ButtonViewReturnComponentProps['isActive']>;
    action?: ButtonViewReturnComponentProps['action'];
    style?: StyleValue;
    shortcutKeys?: string[];
    disabled?: boolean;
    divider?: boolean;
    default?: boolean;
}
interface Props {
    editor: Editor;
    disabled?: boolean;
    color?: string;
    maxHeight?: string | number;
    icon?: any;
    tooltip?: string;
    items?: Item[];
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    color: undefined;
    maxHeight: undefined;
    icon: undefined;
    tooltip: string;
    items: () => never[];
}>>>, {
    icon: any;
    color: string;
    tooltip: string;
    disabled: boolean;
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
