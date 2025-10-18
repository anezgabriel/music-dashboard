"use client";

import { Heart, MessageCircle, TrendingUp, Users } from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "~/components/ui/chart";
import { Progress } from "~/components/ui/progress";
import { fanMetrics } from "~/lib/mock-data";

export function EngagementContent() {
	const totalFollowers = fanMetrics.reduce(
		(acc, curr) => acc + curr.followers,
		0,
	);
	const avgEngagement = (
		fanMetrics.reduce((acc, curr) => acc + curr.engagement, 0) /
		fanMetrics.length
	).toFixed(1);
	const avgGrowth = (
		fanMetrics.reduce((acc, curr) => acc + curr.growth, 0) / fanMetrics.length
	).toFixed(1);

	const engagementData = fanMetrics.map((metric) => ({
		name: metric.platform,
		engagement: metric.engagement,
		fill: "#10b981",
	}));

	const followerData = fanMetrics.map((metric) => ({
		name: metric.platform,
		followers: metric.followers,
		fill: "#3b82f6",
	}));

	return (
		<>
			<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-muted-foreground text-sm">
							Total Followers
						</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-3xl">
							{(totalFollowers / 1000000).toFixed(1)}M
						</div>
						<div className="mt-1 text-muted-foreground text-sm">
							Across all platforms
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-muted-foreground text-sm">
							Avg Engagement
						</CardTitle>
						<Heart className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-3xl">{avgEngagement}%</div>
						<div className="mt-1 flex items-center gap-1 text-green-500 text-sm">
							<TrendingUp className="h-3.5 w-3.5" />
							<span>Above industry avg</span>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="font-medium text-muted-foreground text-sm">
							Avg Growth Rate
						</CardTitle>
						<MessageCircle className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="font-bold text-3xl">{avgGrowth}%</div>
						<div className="mt-1 text-muted-foreground text-sm">
							Monthly growth
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="mb-8 grid grid-cols-1 gap-6 overflow-x-hidden lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Followers by Platform</CardTitle>
						<CardDescription>Distribution of your audience</CardDescription>
					</CardHeader>
					<CardContent className="w-full p-3 sm:p-6">
						<ChartContainer
							config={{
								followers: {
									label: "Followers",
									color: "#3b82f6",
								},
							}}
							className="h-[250px] w-full sm:h-[300px]"
						>
							<ResponsiveContainer width="100%" height="100%">
								<BarChart
									data={followerData}
									layout="vertical"
									margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
								>
									<CartesianGrid
										strokeDasharray="3 3"
										className="stroke-muted/50"
									/>
									<XAxis
										type="number"
										className="fill-muted-foreground text-xs"
										tickFormatter={(value) =>
											`${(value / 1000000).toFixed(1)}M`
										}
										tick={{ fontSize: 10 }}
										tickLine={false}
										axisLine={false}
									/>
									<YAxis
										dataKey="name"
										type="category"
										className="fill-muted-foreground text-xs"
										width={60}
										tick={{ fontSize: 10 }}
										tickLine={false}
										axisLine={false}
									/>
									<ChartTooltip content={<ChartTooltipContent />} />
									<Bar dataKey="followers" radius={[0, 4, 4, 0]}>
										{followerData.map((entry) => (
											<Cell key={`cell-${entry.name}`} fill={entry.fill} />
										))}
									</Bar>
								</BarChart>
							</ResponsiveContainer>
						</ChartContainer>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Engagement Rates</CardTitle>
						<CardDescription>
							Interaction percentage by platform
						</CardDescription>
					</CardHeader>
					<CardContent className="w-full p-3 sm:p-6">
						<ChartContainer
							config={{
								engagement: {
									label: "Engagement",
									color: "#10b981",
								},
							}}
							className="h-[250px] w-full sm:h-[300px]"
						>
							<ResponsiveContainer width="100%" height="100%">
								<BarChart
									data={engagementData}
									margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
								>
									<CartesianGrid
										strokeDasharray="3 3"
										className="stroke-muted/50"
									/>
									<XAxis
										dataKey="name"
										className="fill-muted-foreground text-xs"
										tick={{ fontSize: 10 }}
										tickLine={false}
										axisLine={false}
									/>
									<YAxis
										className="fill-muted-foreground text-xs"
										tickFormatter={(value) => `${value}%`}
										tick={{ fontSize: 10 }}
										tickLine={false}
										axisLine={false}
										width={50}
									/>
									<ChartTooltip content={<ChartTooltipContent />} />
									<Bar dataKey="engagement" radius={[4, 4, 0, 0]}>
										{engagementData.map((entry) => (
											<Cell key={`cell-${entry.name}`} fill={entry.fill} />
										))}
									</Bar>
								</BarChart>
							</ResponsiveContainer>
						</ChartContainer>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Growth Trends</CardTitle>
						<CardDescription>
							Monthly follower growth by platform
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-6">
							{fanMetrics.map((metric) => (
								<div key={metric.platform} className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="font-medium">{metric.platform}</span>
										<span className="text-muted-foreground">
											{metric.growth}%
										</span>
									</div>
									<Progress value={metric.growth * 4} className="h-2" />
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Platform Insights</CardTitle>
						<CardDescription>Detailed metrics breakdown</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{fanMetrics.map((metric, index) => (
								<div
									key={metric.platform}
									className="flex items-center gap-4 rounded-lg bg-muted/50 p-4"
								>
									<div
										className="flex h-12 w-12 items-center justify-center rounded-full"
										style={{
											backgroundColor: `hsl(var(--chart-${index + 1}))`,
										}}
									>
										<span className="font-bold text-lg text-white">
											{metric.platform.charAt(0)}
										</span>
									</div>
									<div className="flex-1">
										<p className="font-semibold">{metric.platform}</p>
										<div className="mt-1 flex items-center gap-4 text-muted-foreground text-sm">
											<span>
												{(metric.followers / 1000).toFixed(0)}K followers
											</span>
											<span>•</span>
											<span>{metric.engagement}% engagement</span>
										</div>
									</div>
									<div
										className={`flex items-center gap-1 font-medium text-sm ${metric.growth > 10 ? "text-green-500" : "text-blue-500"}`}
									>
										<TrendingUp className="h-3.5 w-3.5" />
										<span>{metric.growth}%</span>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
