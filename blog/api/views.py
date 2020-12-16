from .serializers import BlogSerializer
from blog.models import Blog
from rest_framework.generics import ListAPIView, RetrieveAPIView


class BlogList(ListAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class BlogDetail(RetrieveAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
