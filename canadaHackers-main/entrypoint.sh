python manage.py collectstatic --noinput

gunicorn -w 2 -b 0.0.0.0:8080 canadahackers.wsgi:application
