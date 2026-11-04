from django.shortcuts import render
from rest_framework import generics
from .models import Education
from .serializers import EducationSerializer


class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer