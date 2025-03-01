import { Extension } from '@tiptap/core';
import { GeneralOptions } from 'echo-editor';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        exportWord: {
            exportToWord: () => ReturnType;
        };
    }
}
export interface ExportWordOptions extends GeneralOptions<ExportWordOptions> {
}
export declare const ExportWord: Extension<ExportWordOptions, any>;
