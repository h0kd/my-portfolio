// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // …otras opciones que ya tuvieras
};

// primero creas el HOC sin argumentos (o pasándole su propia config si la necesitas)
const withNextIntl = createNextIntlPlugin();

// luego aplicas ese HOC sobre tu nextConfig
export default withNextIntl(nextConfig);
