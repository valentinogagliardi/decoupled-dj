import dataclasses
import strawberry
import datetime
import decimal

from typing import List
from enum import Enum
from users.models import User as UserModel
from billing.models import Invoice as InvoiceModel
from billing.models import ItemLine as ItemLineModel
from asgiref.sync import sync_to_async


@strawberry.enum
class InvoiceState(Enum):
    PAID = "PAID"
    UNPAID = "UNPAID"
    CANCELLED = "CANCELLED"


@strawberry.type
class User:
    id: strawberry.ID
    name: str
    email: str


@strawberry.type
class Invoice:
    user: User
    date: datetime.date
    due_date: datetime.date
    state: InvoiceState
    items: List["ItemLine"]


@strawberry.type
class ItemLine:
    quantity: int
    description: str
    price: decimal.Decimal
    taxed: bool


def _get_all_clients():
    return list(UserModel.objects.all())


async def resolve_clients():
    return await sync_to_async(_get_all_clients)()


def _get_client(id):
    return UserModel.objects.get(id=id)


async def resolve_client(id: strawberry.ID):
    return await sync_to_async(_get_client)(id)


@strawberry.type
class Query:
    get_clients: List[User] = strawberry.field(resolver=resolve_clients)
    get_client: User = strawberry.field(resolver=resolve_client)


@strawberry.input
class ItemLineInput:
    quantity: int
    description: str
    price: decimal.Decimal
    taxed: bool


@strawberry.input
class InvoiceInput:
    user: strawberry.ID
    date: datetime.date
    due_date: datetime.date
    state: InvoiceState
    items: List[ItemLineInput]


def _create_invoice(user_id, state, invoice):
    return InvoiceModel.objects.create(user_id=user_id, state=state.value, **invoice)


def _create_itemlines(invoice, item):
    ItemLineModel.objects.create(invoice=invoice, **item)


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def create_invoice(self, invoice: InvoiceInput) -> Invoice:
        _invoice = dataclasses.asdict(invoice)
        user_id = _invoice.pop("user")
        items = _invoice.pop("items")
        state = _invoice.pop("state")

        new_invoice = await sync_to_async(_create_invoice)(user_id, state, _invoice)
        for item in items:
            await sync_to_async(_create_itemlines)(new_invoice, item)
        return new_invoice


schema = strawberry.Schema(query=Query, mutation=Mutation)
