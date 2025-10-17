"use client";

import {
	CartesianGrid,
	Line,
	LineChart,
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
							margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis dataKey="month" className="text-xs" />
							<YAxis yAxisId="left" className="text-xs" />
							<YAxis yAxisId="right" orientation="right" className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="streams"
								stroke="var(--color-streams)"
								strokeWidth={2}
								dot={false}
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="revenue"
								stroke="var(--color-revenue)"
								strokeWidth={2}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
