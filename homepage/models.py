from django.db import models

# Create your models here.
class ExecuteCMD(models.Model):
    raw_cmd =  models.TextField(blank=True,null=True,default="")

class ControleWebpage(models.Model):
    description_cmd = models.TextField(blank=True,null=True)
    raw_history = models.TextField()