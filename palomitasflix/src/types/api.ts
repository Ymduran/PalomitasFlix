export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    meta?: PaginationMeta | null;
    errors?: Record<string, string[]> | null;
}

export interface PaginationMeta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
}

export interface ListParams {
    page?: number;
    perPage?: number;
    search?: string;
}