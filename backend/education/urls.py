from django.urls import path
from .views import EducationListAPIView

urlpatterns = [
    path('', EducationListAPIView.as_view(), name='education-list'),
]