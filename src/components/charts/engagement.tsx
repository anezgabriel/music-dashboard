"use client";

import {
	Bar,
	BarChart,
	CartesianGrid,
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
import type { FanMetric } from "~/lib/mock-data";

interface EngagementChartProps {
	data: FanMetric[];
}

export function EngagementChart({ data }: EngagementChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Platform Comparison</CardTitle>
				<CardDescription>
					Engagement rates across social platforms
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						engagement: {
							label: "Engagement Rate",
							color: "hsl(var(--chart-1))",
						},
					}}
					className="h-[300px]"
				>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={data}
							margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis dataKey="platform" className="text-xs" />
							<YAxis className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Bar
								dataKey="engagement"
								fill="var(--color-engagement)"
								radius={[4, 4, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
