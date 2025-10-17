import { DollarSign, Download, Headphones, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { SalesChart } from "~/components/charts/sales";
import { TopTracksTable } from "~/components/top-tracks-table";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { salesData, topTracks } from "~/lib/mock-data";

export default function AnalyticsPage() {
	const totalStreams = salesData.reduce((sum, data) => sum + data.streams, 0);
	const totalRevenue = salesData.reduce((sum, data) => sum + data.revenue, 0);
	const totalDownloads = salesData.reduce(
		(sum, data) => sum + data.downloads,
		0,
	);
	const avgStreamsPerMonth = Math.round(totalStreams / salesData.length);

	const { streamsGrowth, revenueGrowth } = useMemo(() => {
		const latestMonth = salesData[salesData.length - 1];
		const previousMonth = salesData[salesData.length - 2];

		if (!latestMonth || !previousMonth) {
			return {
				streamsGrowth: 0,
				revenueGrowth: 0,
			};
		}

		const streamsGrowth =
			((latestMonth.streams - previousMonth.streams) / previousMonth.streams) *
			100;
		const revenueGrowth =
			((latestMonth.revenue - previousMonth.revenue) / previousMonth.revenue) *
			100;

		return {
			streamsGrowth,
			revenueGrowth,
		};
	}, []);

	return (
		<div className="container px-4 py-8">
			<div className="mb-8">
				<h1 className="mb-2 text-balance font-bold text-4xl">
					Sales Analytics
				</h1>
				<p className="text-lg text-muted-foreground">
					Track your performance and revenue
				</p>
			</div>

			<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-sm">Total Streams</CardTitle>
						<Headphones className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-2xl text-chart-2">
							{(totalStreams / 1000000).toFixed(1)}M
						</div>
						<p className="mt-1 flex items-center gap-1 text-muted-foreground text-xs">
							<TrendingUp className="h-3 w-3 text-chart-2" />
							<span className="text-chart-2">+{streamsGrowth.toFixed(1)}%</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-sm">Total Revenue</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-2xl text-chart-2">
							${(totalRevenue / 1000).toFixed(1)}K
						</div>
						<p className="mt-1 flex items-center gap-1 text-muted-foreground text-xs">
							<TrendingUp className="h-3 w-3 text-chart-2" />
							<span className="text-chart-2">+{revenueGrowth.toFixed(1)}%</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-sm">
							Total Downloads
						</CardTitle>
						<Download className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-2xl">
							{(totalDownloads / 1000).toFixed(1)}K
						</div>
						<p className="mt-1 text-muted-foreground text-xs">
							Across all platforms
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-sm">
							Avg. Monthly Streams
						</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-2xl">
							{(avgStreamsPerMonth / 1000000).toFixed(1)}M
						</div>
						<p className="mt-1 text-muted-foreground text-xs">Last 10 months</p>
					</CardContent>
				</Card>
			</div>

			<div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
				<SalesChart data={salesData} />
				<TopTracksTable tracks={topTracks} />
			</div>
		</div>
	);
}
