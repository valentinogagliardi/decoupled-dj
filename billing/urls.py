from django.urls import path
from .views import Index
from .api.views import ClientList, InvoiceCreate
from strawberry.django.views import AsyncGraphQLView
from .schema import schema

app_name = "billing"

urlpatterns = [
    path("", Index.as_view(), name="index"),
    path("api/clients/", ClientList.as_view(), name="client-list"),
    path("api/invoices/", InvoiceCreate.as_view(), name="invoice-create"),
    path("graphql/", AsyncGraphQLView.as_view(schema=schema), name="graphql"),
]
