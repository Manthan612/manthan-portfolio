from django.contrib import admin
from .models import Education

# Register your models here.
@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'start_year', 'end_year')
    search_fields = ('degree', 'institution')