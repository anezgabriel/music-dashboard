import type { Metadata } from "next";
import { EngagementContent } from "~/components/engagement/engagement-content";

// Metadata for SEO
export const metadata: Metadata = {
	title: "Fan Engagement | Music Dashboard",
	description:
		"Track your audience growth and interaction metrics across all platforms",
	openGraph: {
		title: "Fan Engagement | Music Dashboard",
		description:
			"Track your audience growth and interaction metrics across all platforms",
		type: "website",
	},
	keywords: [
		"fan engagement",
		"social media analytics",
		"music dashboard",
		"audience growth",
		"platform metrics",
		"engagement rates",
		"follower analytics",
	],
};

export default function EngagementPage() {
	return (
		<div className="container overflow-x-hidden px-4 py-8">
			<div className="mb-8">
				<h1 className="mb-2 text-balance font-bold text-4xl">Fan Engagement</h1>
				<p className="text-lg text-muted-foreground">
					Track your audience growth and interaction metrics
				</p>
			</div>

			<EngagementContent />
		</div>
	);
}
