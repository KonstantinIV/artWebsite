# Use an official PHP-FPM image as the base image
FROM php:8.2-fpm

# Set the working directory inside the container
WORKDIR /var/www/html/artWebsite

# Copy the  application code to the container's working directory
COPY /development/artWebsite .

#Install dpendencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install pdo pdo_mysql zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install vendor dependencies
RUN composer install --optimize-autoloader --no-dev


CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000


