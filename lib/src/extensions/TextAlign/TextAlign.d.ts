import { Extension } from '@tiptap/core';
import { TextAlignOptions as TiptapTextAlignOptions } from '@tiptap/extension-text-align';
import { GeneralOptions } from '../../type';

type Alignments = 'left' | 'center' | 'right' | 'justify';
/**
 * Represents the interface for text align options, extending TiptapTextAlignOptions and GeneralOptions.
 */
export interface TextAlignOptions extends TiptapTextAlignOptions, GeneralOptions<TextAlignOptions> {
    /**
     * List of available alignment options
     *
     * @default ['left', 'center', 'right', 'justify']
     */
    alignments: Alignments[];
}
export declare const TextAlign: Extension<TextAlignOptions, any>;
export {};
