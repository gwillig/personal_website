from django.db import models

# Create your models here.


class ControleWebpage(models.Model):
    raw_cmd =  models.TextField()
    raw_history = models.TextField()