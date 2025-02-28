declare const _default: import('vue').DefineComponent<{
    editor: {
        type: import('vue').PropType<import('@tiptap/core').Editor>;
        required: true;
    };
    node: {
        type: import('vue').PropType<import('prosemirror-model').Node>;
        required: true;
    };
    decorations: {
        type: import('vue').PropType<readonly import('@tiptap/vue-3').DecorationWithType[]>;
        required: true;
    };
    selected: {
        type: import('vue').PropType<boolean>;
        required: true;
    };
    extension: {
        type: import('vue').PropType<import('@tiptap/vue-3').Node<any, any>>;
        required: true;
    };
    getPos: {
        type: import('vue').PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: import('vue').PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
    view: {
        type: import('vue').PropType<import('prosemirror-view').EditorView>;
        required: true;
    };
    innerDecorations: {
        type: import('vue').PropType<import('prosemirror-view').DecorationSource>;
        required: true;
    };
    HTMLAttributes: {
        type: import('vue').PropType<Record<string, any>>;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    editor: {
        type: import('vue').PropType<import('@tiptap/core').Editor>;
        required: true;
    };
    node: {
        type: import('vue').PropType<import('prosemirror-model').Node>;
        required: true;
    };
    decorations: {
        type: import('vue').PropType<readonly import('@tiptap/vue-3').DecorationWithType[]>;
        required: true;
    };
    selected: {
        type: import('vue').PropType<boolean>;
        required: true;
    };
    extension: {
        type: import('vue').PropType<import('@tiptap/vue-3').Node<any, any>>;
        required: true;
    };
    getPos: {
        type: import('vue').PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: import('vue').PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
    view: {
        type: import('vue').PropType<import('prosemirror-view').EditorView>;
        required: true;
    };
    innerDecorations: {
        type: import('vue').PropType<import('prosemirror-view').DecorationSource>;
        required: true;
    };
    HTMLAttributes: {
        type: import('vue').PropType<Record<string, any>>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
