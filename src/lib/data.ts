import { type SalesData, salesData, topTracks } from "./mock-data";

// Simulate API delay for demonstration
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface AnalyticsData {
	salesData: typeof salesData;
	topTracks: typeof topTracks;
	totalStreams: number;
	totalRevenue: number;
	totalDownloads: number;
	avgStreamsPerMonth: number;
	streamsGrowth: number;
	revenueGrowth: number;
}

export async function getAnalyticsData(): Promise<AnalyticsData> {
	// Simulate network delay
	await delay(1500);

	const totalStreams = salesData.reduce((sum, data) => sum + data.streams, 0);
	const totalRevenue = salesData.reduce((sum, data) => sum + data.revenue, 0);
	const totalDownloads = salesData.reduce(
		(sum, data) => sum + data.downloads,
		0,
	);
	const avgStreamsPerMonth = Math.round(totalStreams / salesData.length);

	// Calculate growth rates
	const latestMonth = salesData[salesData.length - 1] as SalesData;
	const previousMonth = salesData[salesData.length - 2] as SalesData;

	const streamsGrowth =
		previousMonth.streams > 0
			? ((latestMonth.streams - previousMonth.streams) /
					previousMonth.streams) *
				100
			: 0;
	const revenueGrowth =
		previousMonth.revenue > 0
			? ((latestMonth.revenue - previousMonth.revenue) /
					previousMonth.revenue) *
				100
			: 0;

	return {
		salesData,
		topTracks,
		totalStreams,
		totalRevenue,
		totalDownloads,
		avgStreamsPerMonth,
		streamsGrowth,
		revenueGrowth,
	};
}
