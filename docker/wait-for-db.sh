#!/bin/sh
set -eu

DB_HOST="db"
DB_PORT="${DB_PORT:-5432}"
MAX_RETRIES=60
SLEEP_SEC=1

echo "Waiting for database $DB_HOST:$DB_PORT ..."

i=0
while ! nc -z "$DB_HOST" "$DB_PORT" >/dev/null 2>&1; do
  i=$((i+1))
  if [ "$i" -ge "$MAX_RETRIES" ]; then
    echo "Timeout waiting for $DB_HOST:$DB_PORT"
    exit 1
  fi
  sleep $SLEEP_SEC
done

echo "Database is up: $DB_HOST:$DB_PORT"
exec "$@"
