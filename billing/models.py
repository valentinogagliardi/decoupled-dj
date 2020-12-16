from django.db import models
from django.conf import settings


class Invoice(models.Model):
    class State(models.TextChoices):
        PAID = "PAID"
        UNPAID = "UNPAID"
        CANCELLED = "CANCELLED"

    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    date = models.DateField()
    due_date = models.DateField()
    state = models.CharField(max_length=15, choices=State.choices, default=State.UNPAID)


class ItemLine(models.Model):
    invoice = models.ForeignKey(
        to=Invoice, on_delete=models.PROTECT, related_name="items"
    )
    quantity = models.IntegerField()
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    taxed = models.BooleanField()
