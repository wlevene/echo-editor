export type Theme = 'light' | 'dark' | 'system';
export declare function useColorMode(): {
    theme: import('vue').Ref<Theme>;
    toggleTheme: () => void;
};
