# Generated by Django 4.1.5 on 2023-03-18 16:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('esgliveapp', '0005_alter_collectivematch_collectivematchdesc_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detailsmatch',
            name='captainId',
        ),
    ]