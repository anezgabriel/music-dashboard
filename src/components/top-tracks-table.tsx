import { TrendingUp } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import type { TopTrack } from "~/lib/mock-data";

interface TopTracksTableProps {
	tracks: TopTrack[];
}

export function TopTracksTable({ tracks }: TopTracksTableProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top Performing Tracks</CardTitle>
				<CardDescription>Your most streamed songs this period</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{tracks.map((track, index) => (
						<div
							key={track.title}
							className="flex items-center justify-between gap-4"
						>
							<div className="flex min-w-0 flex-1 items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted font-medium text-sm">
									{index + 1}
								</div>
								<div className="min-w-0 flex-1">
									<p className="mb-1 truncate font-medium leading-none">
										{track.title}
									</p>
									<p className="text-muted-foreground text-sm">
										{(track.streams / 1000000).toFixed(2)}M streams
									</p>
								</div>
							</div>
							<Badge
								variant="secondary"
								className="flex shrink-0 items-center gap-1"
							>
								<TrendingUp className="h-3 w-3" />+{track.change}%
							</Badge>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
