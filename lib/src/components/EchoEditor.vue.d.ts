import { AnyExtension } from '@tiptap/core';
import { Editor } from '@tiptap/vue-3';
import { EchoEditorOnChange } from '../type';

interface EditorProps {
    /**
     * input value
     */
    modelValue?: string | object;
    /**
     * Editor output type
     *
     * @default 'html'
     */
    output?: 'html' | 'json' | 'text';
    /**
     * dark mode
     *
     * @default false
     */
    dark?: boolean;
    /**
     * Readonly
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Hide Editor Toolbar
     *
     * @default false
     */
    hideToolbar?: boolean;
    /**
     * Hide Editor Menubar
     *
     * @default false
     */
    hideMenubar?: boolean;
    /**
     * Hide Editor Bubble Menu
     *
     * @default false
     */
    hideBubble?: boolean;
    /**
     * Remove tiptap default wrapper when editor is empty eg. <p></p>
     *
     * @default false
     */
    removeDefaultWrapper?: boolean;
    /**
     * Editor content maximum width
     */
    maxWidth?: string | number;
    /**
     * Editor content minimum height
     */
    minHeight?: string | number;
    /**
     * Editor content maximum height
     */
    maxHeight?: string | number;
    /**
     * Tiptap extensions
     */
    extensions?: AnyExtension[];
    /**
     * Editor container class
     */
    editorClass?: string | string[] | Record<string, any>;
    /**
     * Editor content class
     */
    contentClass?: string | string[] | Record<string, any>;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<EditorProps>, {
    modelValue: string;
    output: string;
    dark: undefined;
    disabled: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    extensions: () => never[];
    editorClass: undefined;
    contentClass: undefined;
}>, {
    editor: Editor;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    enter: () => void;
    change: (value: EchoEditorOnChange) => void;
    "update:modelValue": (value: string | object | undefined) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<EditorProps>, {
    modelValue: string;
    output: string;
    dark: undefined;
    disabled: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    maxWidth: undefined;
    minHeight: undefined;
    maxHeight: undefined;
    extensions: () => never[];
    editorClass: undefined;
    contentClass: undefined;
}>>> & {
    onChange?: ((value: EchoEditorOnChange) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | object | undefined) => any) | undefined;
    onEnter?: (() => any) | undefined;
}, {
    disabled: boolean;
    output: "html" | "text" | "json";
    modelValue: string | object;
    extensions: AnyExtension[];
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    dark: boolean;
    hideToolbar: boolean;
    hideMenubar: boolean;
    hideBubble: boolean;
    removeDefaultWrapper: boolean;
    editorClass: string | Record<string, any> | string[];
    contentClass: string | Record<string, any> | string[];
}, {}>, {
    footer?(_: {
        editor: Editor;
    }): any;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
