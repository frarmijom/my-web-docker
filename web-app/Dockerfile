# Usar una imagen base de Nginx, Apache o Node según tu proyecto
FROM nginx:latest 

# Copiar archivos de tu sitio web al directorio raíz de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para servir el sitio
EXPOSE 80

# Comando por defecto para correr el servidor
CMD ["nginx", "-g", "daemon off;"]

