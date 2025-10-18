import type { Metadata } from "next";
import { Suspense } from "react";
import { AnalyticsContent } from "~/components/analytics/analytics-content";
import { AnalyticsSkeleton } from "~/components/skeletons/analytics-skeleton";

// Metadata for SEO
export const metadata: Metadata = {
	title: "Sales Analytics | Music Dashboard",
	description: "Track your performance and revenue with detailed analytics",
	openGraph: {
		title: "Sales Analytics | Music Dashboard",
		description: "Track your performance and revenue with detailed analytics",
		type: "website",
	},
};

export default function AnalyticsPage() {
	return (
		<div className="container px-4 py-8">
			<div className="mb-8">
				<h1 className="mb-2 text-balance font-bold text-4xl">
					Sales Analytics
				</h1>
				<p className="text-lg text-muted-foreground">
					Track your performance and revenue
				</p>
			</div>

			<Suspense fallback={<AnalyticsSkeleton />}>
				<AnalyticsContent />
			</Suspense>
		</div>
	);
}
