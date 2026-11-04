from django.urls import path
from .views import AboutListAPIView

urlpatterns = [
    path('', AboutListAPIView.as_view(), name='about-list'),
]