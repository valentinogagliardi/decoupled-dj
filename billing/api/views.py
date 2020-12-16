from .serializers import InvoiceSerializer
from .serializers import UserSerializer, User
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated


class ClientList(ListAPIView):
    permission_classes = [IsAuthenticated]

    serializer_class = UserSerializer
    queryset = User.objects.all()


class InvoiceCreate(CreateAPIView):
    serializer_class = InvoiceSerializer
