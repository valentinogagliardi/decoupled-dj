from django.urls import path
from .api.views import BlogList, BlogDetail

app_name = "blog"

urlpatterns = [
    path("api/posts/", BlogList.as_view(), name="list"),
    path("api/posts/<int:pk>", BlogDetail.as_view(), name="detail"),
]
