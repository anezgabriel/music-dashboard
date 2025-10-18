import type { Metadata } from "next";
import { ReleaseCard } from "~/components/cards/release";
import { Badge } from "~/components/ui/badge";
import { releases } from "~/lib/mock-data";

// ISR Configuration - Regenerate every 60 seconds
export const revalidate = 60;

// Static generation with ISR
export async function generateStaticParams() {
	// This ensures the page is statically generated at build time
	return [];
}

// Metadata for SEO
export const metadata: Metadata = {
	title: "Recent Releases | Music Dashboard",
	description:
		"Track your music catalog and performance with detailed release information",
	openGraph: {
		title: "Recent Releases | Music Dashboard",
		description:
			"Track your music catalog and performance with detailed release information",
		type: "website",
	},
};

// Simulate data fetching for ISR demonstration
async function getReleasesData() {
	// In a real app, this would be a database query or API call
	// For ISR demonstration, we'll add a small delay to simulate data fetching
	await new Promise((resolve) => setTimeout(resolve, 100));

	return {
		releases,
		generatedAt: new Date().toISOString(),
	};
}

export default async function ReleasesPage() {
	// Fetch data (simulated for ISR demonstration)
	const { releases: releasesData, generatedAt } = await getReleasesData();

	const releasedTracks = releasesData.filter((r) => r.status === "Released");
	const upcomingTracks = releasesData.filter((r) => r.status === "Upcoming");

	return (
		<div className="container px-4 py-8">
			<div className="mb-8">
				<h1 className="mb-2 text-balance font-bold text-4xl">
					Recent Releases
				</h1>
				<p className="text-lg text-muted-foreground">
					Track your music catalog and performance
				</p>
				<p className="text-muted-foreground/70 text-sm">
					Last updated: {new Date(generatedAt).toLocaleString()} (ISR)
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
