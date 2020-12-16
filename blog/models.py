from django.db import models
from django.conf import settings


class Blog(models.Model):
    class Status(models.TextChoices):
        PUBLISHED = "PUBLISHED"
        UNPUBLISHED = "UNPUBLISHED"

    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name="blog_posts"
    )
    title = models.CharField(max_length=160)
    body = models.TextField()
    status = models.CharField(
        max_length=15, choices=Status.choices, default=Status.UNPUBLISHED
    )
    created_at = models.DateTimeField(auto_now_add=True)
