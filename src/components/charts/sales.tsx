"use client";

import {
	CartesianGrid,
	Line,
	LineChart,
	ReferenceLine,
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
import type { SalesData } from "~/lib/mock-data";

interface SalesChartProps {
	data: SalesData[];
}

export function SalesChart({ data }: SalesChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Performance Overview</CardTitle>
				<CardDescription>
					Streams and revenue over the last 10 months
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						streams: {
							label: "Streams",
							color: "hsl(var(--chart-1))",
						},
						revenue: {
							label: "Revenue",
							color: "hsl(var(--chart-2))",
						},
					}}
					className="h-[300px]"
				>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							data={data}
							margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
						>
							<CartesianGrid
								strokeDasharray="3 3"
								className="stroke-muted/50"
							/>
							<XAxis
								dataKey="month"
								className="fill-muted-foreground text-xs"
								tickLine={false}
								axisLine={false}
							/>
							<YAxis
								yAxisId="left"
								className="fill-muted-foreground text-xs"
								tickLine={false}
								axisLine={false}
							/>
							<YAxis
								yAxisId="right"
								orientation="right"
								className="fill-muted-foreground text-xs"
								tickLine={false}
								axisLine={false}
							/>
							<ChartTooltip
								content={<ChartTooltipContent />}
								cursor={{
									stroke: "hsl(var(--muted-foreground))",
									strokeWidth: 1,
									strokeDasharray: "5 5",
								}}
							/>
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="streams"
								stroke="#3b82f6"
								strokeWidth={3}
								dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
								activeDot={{
									r: 6,
									stroke: "#3b82f6",
									strokeWidth: 2,
									fill: "hsl(var(--background))",
								}}
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="revenue"
								stroke="#10b981"
								strokeWidth={3}
								dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
								activeDot={{
									r: 6,
									stroke: "#10b981",
									strokeWidth: 2,
									fill: "hsl(var(--background))",
								}}
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
