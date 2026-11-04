from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/projects/', include('projects.urls')),
    path('api/skills/', include('skills.urls')),
    path('api/experience/', include('experience.urls')),
    path('api/education/', include('education.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/about/', include('about.urls')),
]
