# Generated by Django 3.0.8 on 2020-12-07 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0007_clientinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientinfo',
            name='innerHeight',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=15, null=True),
        ),
    ]