import { LinkOptions as TiptapLinkOptions } from '@tiptap/extension-link';
import { GeneralOptions } from '../../type';

export interface LinkOptions extends TiptapLinkOptions, GeneralOptions<LinkOptions> {
}
export declare const Link: import('@tiptap/core').Mark<LinkOptions, any>;
