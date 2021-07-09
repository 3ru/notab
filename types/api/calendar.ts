export type ListContentsResponse<T> = {
	contents: T[];
	totalCount: number;
	offset: number;
	limit: number;
};

export type CalendarEvent = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	revisedAt: Date;
	title: string;
	start: Date;
	end: Date;
	path: string;
};
