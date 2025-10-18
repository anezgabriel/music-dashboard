"use client";

import { Menu, Music, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const navItems = [
	{ href: "/", label: "Recent Releases", icon: Music },
	{ href: "/analytics", label: "Sales Analytics", icon: TrendingUp },
	{ href: "/engagement", label: "Fan Engagement", icon: Users },
];

export function Navigation() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center gap-8">
					<Link href="/" className="flex cursor-pointer items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
							<Music className="h-5 w-5 text-primary-foreground" />
						</div>
						<span className="font-semibold text-lg">Artist Hub</span>
					</Link>

					<nav className="hidden items-center gap-1 md:flex">
						{navItems.map((item) => {
							const Icon = item.icon;
							const isActive = pathname === item.href;
							return (
								<Link key={item.href} href={item.href}>
									<Button
										variant={isActive ? "secondary" : "ghost"}
										className={cn(
											"cursor-pointer gap-2",
											isActive && "bg-secondary",
										)}
									>
										<Icon className="h-4 w-4" />
										{item.label}
									</Button>
								</Link>
							);
						})}
					</nav>
				</div>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon">
							<Menu className="h-5 w-5" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-64">
						<nav className="mt-8 flex flex-col gap-2">
							{navItems.map((item) => {
								const Icon = item.icon;
								const isActive = pathname === item.href;
								return (
									<Link
										className="cursor-pointer"
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
									>
										<Button
											variant={isActive ? "secondary" : "ghost"}
											className={cn(
												"w-full justify-start gap-2",
												isActive && "bg-secondary",
											)}
										>
											<Icon className="h-4 w-4" />
											{item.label}
										</Button>
									</Link>
								);
							})}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
