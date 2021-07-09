export type ListContentsResponse<T> = {
	contents: T[];
	totalCount: number;
	offset: number;
	limit: number;
};

export type ObjectContent = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	start: string;
	end: string;
	path: string;
};
