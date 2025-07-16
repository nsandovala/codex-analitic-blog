FROM wordpress:latest

# Copia el contenido del proyecto (si tienes temas o plugins)
COPY ./ /var/www/html/

# Configuración por defecto de WordPress
EXPOSE 80
