from rest_framework.test import APITestCase
from rest_framework.status import HTTP_403_FORBIDDEN, HTTP_200_OK, HTTP_201_CREATED
from django.urls import reverse
from model_bakery import baker


class TestBillingAPI(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.admin = baker.make("users.User", is_staff=True)

    def test_anon_cannot_list_clients(self):
        response = self.client.get(reverse("billing:client-list"))
        self.assertEqual(response.status_code, HTTP_403_FORBIDDEN)

    def test_admin_can_list_clients(self):
        self.client.force_login(self.admin)
        response = self.client.get(reverse("billing:client-list"))
        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_anon_cannot_create_invoice(self):
        response = self.client.post(
            reverse("billing:invoice-create"), data={}, format="json"
        )
        self.assertEqual(response.status_code, HTTP_403_FORBIDDEN)

    def test_admin_can_create_invoice(self):
        self.client.force_login(self.admin)
        user = baker.make("users.User")
        data = {
            "user": user.pk,
            "date": "2021-03-15",
            "due_date": "2021-03-30",
            "items": [
                {
                    "quantity": 1,
                    "description": "Django consulting",
                    "price": 5000.00,
                    "taxed": True,
                }
            ],
        }
        response = self.client.post(
            reverse("billing:invoice-create"), data, format="json"
        )
        self.assertEqual(response.status_code, HTTP_201_CREATED)
