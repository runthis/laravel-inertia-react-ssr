#!/usr/bin/env bash
set -eo pipefail

# Include the functions.
. ./bin/functions

# Run the functions.
build_the_composer_files
build_the_env_file
start_the_container
install_the_frontend_dependencies
build_the_frontend_dependencies
symlink_the_public_storage
generate_the_application_key
run_the_database_migrations
