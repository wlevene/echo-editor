export declare const DEMO_CONTENT: {
    type: string;
    content: ({
        type: string;
        attrs: {
            textAlign: string;
            indent: number;
            lineHeight: null;
            level: number;
            src?: undefined;
            alt?: undefined;
            title?: undefined;
            width?: undefined;
            listStyleType?: undefined;
            language?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    } | {
        type: string;
        attrs: {
            textAlign: string;
            indent: number;
            lineHeight: null;
            level?: undefined;
            src?: undefined;
            alt?: undefined;
            title?: undefined;
            width?: undefined;
            listStyleType?: undefined;
            language?: undefined;
        };
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                    rel: string;
                    class: string;
                };
            }[];
            text: string;
        })[];
    } | {
        type: string;
        attrs: {
            textAlign: string;
            indent: number;
            lineHeight: null;
            level?: undefined;
            src?: undefined;
            alt?: undefined;
            title?: undefined;
            width?: undefined;
            listStyleType?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        attrs: {
            textAlign: string;
            src: string;
            alt: null;
            title: null;
            width: number;
            indent?: undefined;
            lineHeight?: undefined;
            level?: undefined;
            listStyleType?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        attrs?: undefined;
        content?: undefined;
    } | {
        type: string;
        attrs: {
            listStyleType: string;
            textAlign?: undefined;
            indent?: undefined;
            lineHeight?: undefined;
            level?: undefined;
            src?: undefined;
            alt?: undefined;
            title?: undefined;
            width?: undefined;
            language?: undefined;
        };
        content: {
            type: string;
            content: {
                type: string;
                attrs: {
                    textAlign: string;
                    indent: number;
                    lineHeight: null;
                };
                content: ({
                    type: string;
                    text: string;
                    marks?: undefined;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            href: string;
                            target: string;
                            rel: string;
                            class: string;
                        };
                    }[];
                    text: string;
                })[];
            }[];
        }[];
    } | {
        type: string;
        attrs: {
            language: null;
            textAlign?: undefined;
            indent?: undefined;
            lineHeight?: undefined;
            level?: undefined;
            src?: undefined;
            alt?: undefined;
            title?: undefined;
            width?: undefined;
            listStyleType?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    })[];
};
