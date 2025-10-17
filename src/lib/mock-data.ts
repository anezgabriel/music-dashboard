export interface Release {
	id: string;
	title: string;
	coverArt: string;
	releaseDate: string;
	streams: number;
	type: "Single" | "Album" | "EP";
	status: "Released" | "Upcoming";
}

export interface SalesData {
	month: string;
	streams: number;
	revenue: number;
	downloads: number;
}

export interface FanMetric {
	platform: string;
	followers: number;
	engagement: number;
	growth: number;
}

export interface TopTrack {
	title: string;
	streams: number;
	change: number;
}

export const releases: Release[] = [
	{
		id: "1",
		title: "Midnight Dreams",
		coverArt: "/midnight-dreams-album-cover.png",
		releaseDate: "2024-09-15",
		streams: 2450000,
		type: "Single",
		status: "Released",
	},
	{
		id: "2",
		title: "Electric Horizons",
		coverArt: "/album-cover-electric-horizons.jpg",
		releaseDate: "2024-07-22",
		streams: 5820000,
		type: "Album",
		status: "Released",
	},
	{
		id: "3",
		title: "Summer Vibes",
		coverArt: "/album-cover-summer-vibes.jpg",
		releaseDate: "2024-06-10",
		streams: 3100000,
		type: "EP",
		status: "Released",
	},
	{
		id: "4",
		title: "Neon Nights",
		coverArt: "/neon-nights-album-cover.png",
		releaseDate: "2024-11-01",
		streams: 0,
		type: "Single",
		status: "Upcoming",
	},
	{
		id: "5",
		title: "Acoustic Sessions",
		coverArt: "/acoustic-sessions-album-cover.png",
		releaseDate: "2024-04-18",
		streams: 1890000,
		type: "EP",
		status: "Released",
	},
	{
		id: "6",
		title: "Reflections",
		coverArt: "/album-cover-reflections.jpg",
		releaseDate: "2024-02-14",
		streams: 4200000,
		type: "Album",
		status: "Released",
	},
];

export const salesData: SalesData[] = [
	{ month: "Jan", streams: 3200000, revenue: 12800, downloads: 4500 },
	{ month: "Feb", streams: 4100000, revenue: 16400, downloads: 5200 },
	{ month: "Mar", streams: 3800000, revenue: 15200, downloads: 4800 },
	{ month: "Apr", streams: 5200000, revenue: 20800, downloads: 6100 },
	{ month: "May", streams: 4900000, revenue: 19600, downloads: 5800 },
	{ month: "Jun", streams: 6300000, revenue: 25200, downloads: 7200 },
	{ month: "Jul", streams: 7100000, revenue: 28400, downloads: 8100 },
	{ month: "Aug", streams: 6800000, revenue: 27200, downloads: 7800 },
	{ month: "Sep", streams: 7500000, revenue: 30000, downloads: 8500 },
	{ month: "Oct", streams: 8200000, revenue: 32800, downloads: 9200 },
];

export const fanMetrics: FanMetric[] = [
	{ platform: "Spotify", followers: 1250000, engagement: 8.5, growth: 12.3 },
	{ platform: "Instagram", followers: 890000, engagement: 6.2, growth: 8.7 },
	{ platform: "TikTok", followers: 2100000, engagement: 12.8, growth: 24.5 },
	{ platform: "YouTube", followers: 650000, engagement: 5.4, growth: 6.2 },
	{ platform: "Twitter", followers: 420000, engagement: 3.8, growth: 4.1 },
];

export const topTracks: TopTrack[] = [
	{ title: "Electric Horizons", streams: 5820000, change: 15.2 },
	{ title: "Reflections", streams: 4200000, change: 8.4 },
	{ title: "Summer Vibes", streams: 3100000, change: 12.7 },
	{ title: "Midnight Dreams", streams: 2450000, change: 22.1 },
	{ title: "Acoustic Sessions", streams: 1890000, change: 5.3 },
];
