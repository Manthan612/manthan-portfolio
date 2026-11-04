from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = ('title', 'technologies', 'created_at')
    search_fields = ('title', 'technologies')
    list_filter = ('created_at',)