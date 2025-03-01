declare const _default: import('vue').DefineComponent<{
    selected: {
        type: BooleanConstructor;
        required: true;
    };
    editor: {
        type: globalThis.PropType<import('@tiptap/core').Editor>;
        required: true;
    };
    node: {
        type: globalThis.PropType<import('prosemirror-model').Node>;
        required: true;
    };
    decorations: {
        type: globalThis.PropType<readonly import('@tiptap/vue-3').DecorationWithType[]>;
        required: true;
    };
    extension: {
        type: globalThis.PropType<import('@tiptap/vue-3').Node<any, any>>;
        required: true;
    };
    getPos: {
        type: globalThis.PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: globalThis.PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: globalThis.PropType<() => void>;
        required: true;
    };
    view: {
        type: globalThis.PropType<import('prosemirror-view').EditorView>;
        required: true;
    };
    innerDecorations: {
        type: globalThis.PropType<import('prosemirror-view').DecorationSource>;
        required: true;
    };
    HTMLAttributes: {
        type: globalThis.PropType<Record<string, any>>;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    selected: {
        type: BooleanConstructor;
        required: true;
    };
    editor: {
        type: globalThis.PropType<import('@tiptap/core').Editor>;
        required: true;
    };
    node: {
        type: globalThis.PropType<import('prosemirror-model').Node>;
        required: true;
    };
    decorations: {
        type: globalThis.PropType<readonly import('@tiptap/vue-3').DecorationWithType[]>;
        required: true;
    };
    extension: {
        type: globalThis.PropType<import('@tiptap/vue-3').Node<any, any>>;
        required: true;
    };
    getPos: {
        type: globalThis.PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: globalThis.PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: globalThis.PropType<() => void>;
        required: true;
    };
    view: {
        type: globalThis.PropType<import('prosemirror-view').EditorView>;
        required: true;
    };
    innerDecorations: {
        type: globalThis.PropType<import('prosemirror-view').DecorationSource>;
        required: true;
    };
    HTMLAttributes: {
        type: globalThis.PropType<Record<string, any>>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
