import { Card, CardContent, CardHeader } from "~/components/ui/card";

export function AnalyticsSkeleton() {
	return (
		<>
			{/* Summary Cards Skeleton */}
			<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 4 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Card key={i}>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<div className="h-4 w-24 animate-pulse rounded bg-muted" />
							<div className="h-4 w-4 animate-pulse rounded bg-muted" />
						</CardHeader>
						<CardContent>
							<div className="mb-2 h-8 w-20 animate-pulse rounded bg-muted" />
							<div className="h-3 w-32 animate-pulse rounded bg-muted" />
						</CardContent>
					</Card>
				))}
			</div>

			{/* Charts Skeleton */}
			<div className="mb-8 grid grid-cols-1 gap-6 overflow-x-hidden lg:grid-cols-2">
				<Card>
					<CardHeader>
						<div className="h-6 w-48 animate-pulse rounded bg-muted" />
						<div className="h-4 w-64 animate-pulse rounded bg-muted" />
					</CardHeader>
					<CardContent>
						<div className="h-[300px] w-full animate-pulse rounded bg-muted" />
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div className="h-6 w-40 animate-pulse rounded bg-muted" />
						<div className="h-4 w-56 animate-pulse rounded bg-muted" />
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{Array.from({ length: 5 }).map((_, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<div key={i} className="flex items-center justify-between">
									<div className="h-4 w-24 animate-pulse rounded bg-muted" />
									<div className="h-4 w-16 animate-pulse rounded bg-muted" />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
