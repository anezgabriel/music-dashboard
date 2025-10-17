import { Navigation } from "@/components/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "../styles/globals.css";
import { cn } from "~/lib/utils";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Artist Hub - Music Dashboard",
	description: "Track your releases, sales, and fan engagement",
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={cn("font-sans antialiased")}>
				<Navigation />
				<main className="container mx-auto min-h-[calc(100vh-4rem)]">
					{children}
				</main>
			</body>
		</html>
	);
}
