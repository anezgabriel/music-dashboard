/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	// Enable experimental features for Next.js 15
	experimental: {
		// Enable React Compiler optimizations
		reactCompiler: true,
	},
	// Image optimization settings
	images: {
		unoptimized: process.env.NODE_ENV === "development",
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	// Compiler optimizations
	compiler: {
		// Remove console.log in production
		removeConsole: process.env.NODE_ENV === "production",
	},
};

export default config;
