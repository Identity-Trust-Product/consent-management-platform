/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import type { NextConfig } from "next";
import { FILE_UPLOAD_CONFIG } from "./lib/schemas/file-upload";

const nextConfig: NextConfig = {
  output: "standalone",
  assetPrefix: "/cms",
  experimental: {
    serverActions: {
      bodySizeLimit: FILE_UPLOAD_CONFIG.MAX_FILE_SIZE,
    },
  },
  images: {
    // Allow images from any HTTPS source for the fiduciary logo
    // This is needed because DATA_FIDUCIARY_LOGO_URL can be any external URL
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
