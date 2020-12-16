from django.test import TestCase
from model_bakery import baker


class TestUser(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = baker.make("users.User")

    def test_str(self):
        self.assertEqual(str(self.user), self.user.email)
