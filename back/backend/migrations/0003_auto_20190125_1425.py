# Generated by Django 2.1.5 on 2019-01-25 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20190123_0038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datafile',
            name='data',
            field=models.FileField(blank=True, null=True, upload_to='uploads/%Y/%m/%d/'),
        ),
    ]
