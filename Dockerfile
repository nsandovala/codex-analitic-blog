FROM wordpress:php8.2-apache

# Habilitar extensiones necesarias
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Copia opcional de archivos personalizados
# COPY ./your-theme /var/www/html/wp-content/themes/your-theme

# Configuración para Render (puerto)
ENV PORT=80
EXPOSE 80
