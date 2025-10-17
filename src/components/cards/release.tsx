"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Release } from "@/lib/mock-data";
import { Calendar, Play } from "lucide-react";
import Image from "next/image";

interface ReleaseCardProps {
	release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
	const formatStreams = (streams: number) => {
		if (streams >= 1000000) {
			return `${(streams / 1000000).toFixed(1)}M`;
		}
		if (streams >= 1000) {
			return `${(streams / 1000).toFixed(0)}K`;
		}
		return streams.toString();
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<Card className="group overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg">
			<CardContent className="p-0">
				<div className="relative aspect-square overflow-hidden bg-muted">
					<Image
						src={release.coverArt || "/placeholder.svg"}
						alt={release.title}
						fill
						className="object-cover transition-transform group-hover:scale-105"
					/>
					{release.status === "Upcoming" && (
						<div className="absolute inset-0 flex items-center justify-center bg-black/60">
							<Badge variant="secondary" className="text-sm">
								Coming Soon
							</Badge>
						</div>
					)}
				</div>
				<div className="p-4">
					<div className="mb-2 flex items-start justify-between gap-2">
						<h3 className="line-clamp-1 font-semibold text-lg leading-tight">
							{release.title}
						</h3>
						<Badge variant="outline" className="shrink-0 text-xs">
							{release.type}
						</Badge>
					</div>
					<div className="flex items-center gap-4 text-muted-foreground text-sm">
						<div className="flex items-center gap-1">
							<Calendar className="h-3.5 w-3.5" />
							<span>{formatDate(release.releaseDate)}</span>
						</div>
						{release.status === "Released" && (
							<div className="flex items-center gap-1">
								<Play className="h-3.5 w-3.5" />
								<span>{formatStreams(release.streams)}</span>
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
