const nextConfig = {
  poweredByHeader: false, // ✅ Oculta "X-Powered-By"
  productionBrowserSourceMaps: false, // ✅ Evita filtrar código fuente
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "same-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // ✅ HSTS
          { key: "X-XSS-Protection", value: "1; mode=block" }, // ✅ Anti-XSS
          {
            key: "Content-Security-Policy", // ✅ Blindaje contra inyección
            value:
              "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
