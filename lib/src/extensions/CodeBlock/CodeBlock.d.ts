import { CodeBlockLowlightOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block-lowlight';
import { GeneralOptions } from '../../type';

export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {
}
export declare const CodeBlock: import('@tiptap/vue-3').Node<CodeBlockOptions, any>;
