FROM php:8.3-apache

# Extensions et outils
RUN apt-get update && apt-get install -y git unzip libicu-dev libzip-dev \
    && docker-php-ext-install intl zip pdo pdo_mysql opcache \
    && rm -rf /var/lib/apt/lists/*

# Modules Apache indispensables
RUN a2enmod rewrite headers

# DocumentRoot vers public/ et port 10000 (exigé par Render)
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf \
    && sed -ri -e 's/Listen 80/Listen 10000/' /etc/apache2/ports.conf \
    && sed -ri -e 's/<VirtualHost \*:80>/<VirtualHost *:10000>/' /etc/apache2/sites-available/000-default.conf

# Autoriser .htaccess
RUN printf '<Directory /var/www/html/public>\n    AllowOverride All\n    Require all granted\n</Directory>\n' \
    > /etc/apache2/conf-available/symfony.conf \
    && a2enconf symfony

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

ENV APP_ENV=prod
RUN composer install --no-dev --optimize-autoloader --no-scripts \
    && php bin/console cache:clear --env=prod \
    && chown -R www-data:www-data var

EXPOSE 10000