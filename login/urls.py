from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView


app_name = "auth"

urlpatterns = [
    path(
        "login/",
        LoginView.as_view(
            template_name="login/login.html", redirect_authenticated_user=True
        ),
        name="login",
    ),
    path("logout/", LogoutView.as_view(), name="logout"),
]
