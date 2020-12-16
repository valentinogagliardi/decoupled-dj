from django.urls import path, include
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    path("billing/", include("billing.urls", namespace="billing")),
]

if settings.DEBUG:
    urlpatterns = [
        path("admin/", admin.site.urls),
    ] + urlpatterns

if not settings.DEBUG:
    urlpatterns = [
        path("77randomAdmin@33/", admin.site.urls),
    ] + urlpatterns
