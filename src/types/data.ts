export interface ITodo {
    id?: number;
    label: string;
    done: boolean;
    important: boolean;
    onDeleted?: () => void
    onToggleDone?: () => void
    onToggleImportant?: () => void
}