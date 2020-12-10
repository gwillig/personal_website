from django.db import models

# Create your models here.
class ExecuteCMD(models.Model):
    raw_cmd =  models.TextField(blank=True, null=True, default="")

class ControleWebpage(models.Model):
    description_cmd = models.TextField(blank=True, null=True)
    raw_history = models.TextField()

class ClientInfo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    client_ip = models.CharField(max_length=40, blank=True, null=True)
    innerWidth = models.DecimalField(decimal_places=6, max_digits=15, blank=True, null=True)
    innerHeight = models.DecimalField(decimal_places=6, max_digits=15, blank=True, null=True)
