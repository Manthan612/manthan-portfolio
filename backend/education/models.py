from django.db import models

# Create your models here.
class Education(models.Model):
    degree = models.CharField(max_length=150)
    institution = models.CharField(max_length=200)
    location = models.CharField(max_length=150, blank=True)
    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.degree} - {self.institution}"