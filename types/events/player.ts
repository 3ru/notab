export type MemberStatus = { [s: string]: boolean };

export type LiveStatuses = {
	[s: string]: {
		status: boolean;
		members: MemberStatus;
	};
};
