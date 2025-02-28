import { Editor } from '@tiptap/core';

declare const _default: import('vue').DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    completion: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    generate: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    completion: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onGenerate?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
