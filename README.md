# About

This is an opinionated Laravel 10 install using React with Server-side Rendering (SSR).


## Setup
`git clone git@github.com:runthis/laravel-inertia-react-ssr.git my-app`

`bash ./bin/init.sh`


## Accessing the site

http://localhost/


## Packages & Features

### Base

- [Laravel 10](https://laravel.com/docs/10.x/releases)
- [Inertia](https://inertiajs.com/)
- [React](https://react.dev/)
- [SASS](https://www.npmjs.com/package/sass)


### Development

- [Laravel Sail](https://laravel.com/docs/10.x/sail)
  - PHP 8.2
  - MariaDB
  - Redis
  - Meilisearch
  - Mailpit
- [ESLint](https://eslint.org/docs/latest/)
- [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer)
- [Slevomat](https://github.com/slevomat/coding-standard)
- [Vite](https://vitejs.dev/)
- [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)

### Features

- [Server-side Rendering](https://inertiajs.com/server-side-rendering)
  - Default app and ssr files
  - Start with `sail artisan inertia:start-ssr`
- [Tabler Icons React](https://tabler.io/icons)
- [Mantine](https://mantine.dev/)


## Custom ports

*If you want to change the default ports you can add env variables to your local .env file and restart the container*


#### Main site

`APP_PORT=####`


#### MariaDB

`FORWARD_DB_PORT=####`


#### Redis

`FORWARD_REDIS_PORT=####`


#### Meilisearch

`FORWARD_MEILISEARCH_PORT=####`


#### Mailpit

`FORWARD_MAILPIT_PORT=####`

`FORWARD_MAILPIT_DASHBOARD_PORT=####`
