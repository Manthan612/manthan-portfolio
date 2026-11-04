from rest_framework import generics
from .models import About
from .serializers import AboutSerializer


class AboutListAPIView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer