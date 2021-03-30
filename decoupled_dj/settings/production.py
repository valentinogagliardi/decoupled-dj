from .base import *  # noqa

SECURE_SSL_REDIRECT = True
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
STATIC_ROOT = env("STATIC_ROOT")

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

REST_FRAMEWORK = {
    **REST_FRAMEWORK,
    "DEFAULT_RENDERER_CLASSES": ["rest_framework.renderers.JSONRenderer"],
}

CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS", default=[])

INSTALLED_APPS = INSTALLED_APPS + ["monitus"]

MIDDLEWARE = MIDDLEWARE + [
    "monitus.middleware.FailedLoginMiddleware",
    "monitus.middleware.Error403EmailsMiddleware",
]

EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS = True


ADMINS = [("Your name here", "your@email.here")]  # CHANGE THIS WITH YOUR EMAIL
