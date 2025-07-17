
# Security Policy

## Protecciones implementadas
- HTTPS forzado (HSTS + redirect)
- Headers seguros:
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: same-origin
  - Permissions-Policy: cámara, micro y geoloc bloqueadas
  - X-XSS-Protection: activado
  - Content-Security-Policy: inyección bloqueada
- Código fuente oculto (sin source maps en producción)
- `x-powered-by` deshabilitado

## Futuras mejoras
- reCAPTCHA v3 para formularios
- Rate Limiting
- Integración WAF (Cloudflare)
