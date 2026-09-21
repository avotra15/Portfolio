FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-install intl zip pdo pdo_pgsql opcache \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

ENV PORT=10000

RUN sed -i 's/80/${PORT}/g' \
    /etc/apache2/sites-available/000-default.conf \
    /etc/apache2/ports.conf

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

ENV APP_ENV=prod
ENV APP_SECRET=build_secret_temporaire
ENV DATABASE_URL=postgresql://user:pass@localhost:5432/db?serverVersion=16

RUN composer install --no-dev --optimize-autoloader --no-scripts
RUN mkdir -p var/cache var/log && chown -R www-data:www-data var