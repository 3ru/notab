export type User = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	revisedAt: Date;
	username: string;
	twitter: string;
	youtubeID?: string;
	pt: number;
	team: Array<string>;
	orgs: Array<string>;
};
