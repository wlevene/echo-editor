import { Editor } from '@tiptap/vue-3';

export declare function useAIConversation(editor: Editor): {
    result: import('vue').Ref<string>;
    status: import('vue').Ref<"init" | "generating" | "completed">;
    conversationHistory: import('vue').Ref<{
        role: string;
        content: string;
    }[]>;
    handleCompletion: (context: string, prompt: string) => Promise<string>;
    resetConversation: () => void;
    stopGeneration: () => void;
};
