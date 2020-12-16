from django.urls import path, include

urlpatterns = [path("billing/", include("billing.urls", namespace="billing"))]
