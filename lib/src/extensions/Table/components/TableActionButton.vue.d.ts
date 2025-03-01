import { Editor } from '@tiptap/vue-3';
import { ButtonViewReturnComponentProps } from '../../../type';
import { icons } from '../../../components/icons';

interface Props {
    editor: Editor;
    icon?: keyof typeof icons;
    tooltip?: string;
    disabled?: boolean;
    color?: string;
    action?: ButtonViewReturnComponentProps['action'];
    isActive?: ButtonViewReturnComponentProps['isActive'];
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    tooltip: undefined;
    disabled: boolean;
    color: undefined;
    action: undefined;
    isActive: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: undefined;
    tooltip: undefined;
    disabled: boolean;
    color: undefined;
    action: undefined;
    isActive: undefined;
}>>>, {
    icon: "Bold" | "LoaderCircle" | "Italic" | "Underline" | "Quote" | "TextQuote" | "Strikethrough" | "Minus" | "Eraser" | "PaintRoller" | "Redo2" | "Undo2" | "AlignCenter" | "AlignJustify" | "AlignLeft" | "AlignRight" | "ChevronUp" | "ChevronDown" | "Subscript" | "Superscript" | "Code" | "Code2" | "Type" | "IndentIncrease" | "IndentDecrease" | "List" | "ListOrdered" | "ListTodo" | "Link" | "ImageUp" | "Video" | "Maximize" | "Minimize" | "Table" | "Sparkles" | "Magic" | "Pencil" | "Unlink" | "BetweenHorizonalEnd" | "BetweenHorizonalStart" | "ColumnDelete" | "BetweenVerticalStart" | "BetweenVerticalEnd" | "RowDelete" | "TableCellsMerge" | "TableCellsSplit" | "Trash2" | "Trash" | "Replace" | "ChevronsUpDown" | "LineHeight" | "Word" | "Paragraph" | "Heading1" | "Heading2" | "Heading3" | "Columns2" | "Columns3" | "Columns4" | "Plus" | "Grip" | "Copy" | "Clipboard" | "MenuDown" | "SizeS" | "SizeM" | "SizeL" | "AspectRatio" | "Gaode" | "Baidu" | "Youku" | "BiliBili" | "Modao" | "Lanhu" | "QQVideo" | "Figma" | "Canva" | "Processon" | "Codepen" | "Jinshuju" | "PanelLeft" | "PanelRight" | "Columns" | "AI" | "ChevronRight" | "ArrowUp" | "Paste" | "Cut" | "File" | "Refresh" | "Eye" | "Printer" | "Tablet" | "Phone" | "Monitor" | "TextSelect" | "SpellCheck" | "DocSearch" | "Close" | "ImageSize" | "FlipVertical" | "FlipHorizontal";
    color: string;
    action: (value?: any) => void;
    isActive: () => boolean;
    tooltip: string;
    disabled: boolean;
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
