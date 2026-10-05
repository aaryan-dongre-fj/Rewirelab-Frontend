/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy", permanent: false },
      { source: "/terms-of-service", destination: "/terms", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/signin", destination: "/", permanent: false },
      { source: "/app", destination: "/", permanent: false },
      { source: "/app/:path*", destination: "/", permanent: false },
      { source: "/settings", destination: "/", permanent: false },
      { source: "/settings/:path*", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
