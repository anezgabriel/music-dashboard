import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { FanMetric } from "@/lib/mock-data";
import { Activity, TrendingUp, Users } from "lucide-react";

interface PlatformCardProps {
	metric: FanMetric;
}

export function PlatformCard({ metric }: PlatformCardProps) {
	return (
		<Card>
			<CardContent className="pt-6">
				<div className="mb-4 flex items-start justify-between">
					<div>
						<h3 className="mb-1 font-semibold text-lg">{metric.platform}</h3>
						<p className="text-muted-foreground text-sm">Social platform</p>
					</div>
					<Badge variant="secondary" className="flex items-center gap-1">
						<TrendingUp className="h-3 w-3" />+{metric.growth}%
					</Badge>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="flex items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
							<Users className="h-4 w-4 text-muted-foreground" />
						</div>
						<div>
							<p className="text-muted-foreground text-xs">Followers</p>
							<p className="font-semibold">
								{(metric.followers / 1000).toFixed(0)}K
							</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
							<Activity className="h-4 w-4 text-muted-foreground" />
						</div>
						<div>
							<p className="text-muted-foreground text-xs">Engagement</p>
							<p className="font-semibold">{metric.engagement}%</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
