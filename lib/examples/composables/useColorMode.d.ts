export type Theme = 'light' | 'dark' | 'system';
export declare function useColorMode(): {
    theme: globalThis.Ref<Theme>;
    toggleTheme: () => void;
};
