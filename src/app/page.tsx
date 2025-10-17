import { ReleaseCard } from "~/components/cards/release";
import { Badge } from "~/components/ui/badge";
import { releases } from "~/lib/mock-data";

export default function ReleasesPage() {
	const releasedTracks = releases.filter((r) => r.status === "Released");
	const upcomingTracks = releases.filter((r) => r.status === "Upcoming");

	return (
		<div className="container px-4 py-8">
			<div className="mb-8">
				<h1 className="mb-2 text-balance font-bold text-4xl">
					Recent Releases
				</h1>
				<p className="text-lg text-muted-foreground">
					Track your music catalog and performance
				</p>
			</div>

			{upcomingTracks.length > 0 && (
				<section className="mb-12">
					<div className="mb-6 flex items-center gap-3">
						<h2 className="font-semibold text-2xl">Upcoming</h2>
						<Badge variant="secondary">{upcomingTracks.length}</Badge>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{upcomingTracks.map((release) => (
							<ReleaseCard key={release.id} release={release} />
						))}
					</div>
				</section>
			)}

			<section>
				<div className="mb-6 flex items-center gap-3">
					<h2 className="font-semibold text-2xl">Released</h2>
					<Badge variant="secondary">{releasedTracks.length}</Badge>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{releasedTracks.map((release) => (
						<ReleaseCard key={release.id} release={release} />
					))}
				</div>
			</section>
		</div>
	);
}
