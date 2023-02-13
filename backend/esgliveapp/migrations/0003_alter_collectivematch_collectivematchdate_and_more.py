# Generated by Django 4.1.5 on 2023-02-13 15:03

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('esgliveapp', '0002_alter_athleticsmatch_athleticsmatchdesc_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectivematch',
            name='collectiveMatchDate',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='collectivematch',
            name='refname',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='collectivematch',
            name='sexe',
            field=models.CharField(blank=True, choices=[('m', 'man'), ('f', 'woman')], default='m', max_length=2),
        ),
        migrations.AlterField(
            model_name='detailsmatch',
            name='captainId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='esgliveapp.player'),
        ),
        migrations.AlterField(
            model_name='team',
            name='globalRank',
            field=models.IntegerField(),
        ),
    ]
