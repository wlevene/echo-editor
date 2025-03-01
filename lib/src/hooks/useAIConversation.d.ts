import { Editor } from '@tiptap/vue-3';

export declare function useAIConversation(editor: Editor): {
    result: globalThis.Ref<string>;
    status: globalThis.Ref<"init" | "generating" | "completed">;
    conversationHistory: globalThis.Ref<{
        role: string;
        content: string;
    }[]>;
    handleCompletion: (context: string, prompt: string) => Promise<string>;
    resetConversation: () => void;
    stopGeneration: () => void;
};
