from django.contrib.auth.models import AbstractUser
from django.db.models import CharField


class User(AbstractUser):
    name = CharField(blank=True, max_length=100)

    def __str__(self):
        return self.email
