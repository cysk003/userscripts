/**
 * @file Preview App WebView resources using the Vite JavaScript API
 * @see {@link https://vitejs.dev/guide/api-javascript.html JavaScript API}
 */

import { preview } from "vite";
import { baseConfig } from "./utils.js";

/**
 * Preview App-Shared WebView resources from xcode dist
 */
(async () => {
	const previewServer = await preview({
		...baseConfig,
		preview: {
			// port: 4173,
			open: "entry-app-webview.html",
		},
		build: {
			outDir: "xcode/App-Shared/Resources/dist/",
		},
	});
	previewServer.printUrls();
})();
