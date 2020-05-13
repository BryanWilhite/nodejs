export interface IMyInterface {
    id: number;
    body?: {
        header: string;
        lines?: string[];
        footer: string;
    };
    isActive: boolean;
    tag?: string;
    title: string;
}
