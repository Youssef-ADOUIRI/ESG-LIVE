# Generated by Django 4.1.5 on 2023-01-18 14:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AthleticsMatch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('athleticsType', models.CharField(max_length=40)),
                ('dateMatch', models.DateTimeField()),
                ('athleticsMatchDesc', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nameTeam', models.CharField(default='teamExt', max_length=10)),
                ('fullnameTeam', models.CharField(max_length=100)),
                ('colorteam', models.CharField(max_length=20)),
                ('descriptionTeam', models.CharField(max_length=200)),
                ('globalRank', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='CollectiveMatch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collectivePhase', models.IntegerField()),
                ('collectiveScoreA', models.IntegerField()),
                ('collectiveScoreB', models.IntegerField()),
                ('collectiveMatchDesc', models.CharField(max_length=200)),
                ('sport', models.CharField(max_length=40)),
                ('collectiveTeamA', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='collectiveTeamA', to='esgliveapp.team')),
                ('collectiveTeamB', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='collectiveTeamB', to='esgliveapp.team')),
            ],
        ),
        migrations.CreateModel(
            name='AthleticsParticipation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
                ('athleticsDesc', models.CharField(max_length=200)),
                ('idathleticsMatch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='esgliveapp.athleticsmatch')),
                ('idteam', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='esgliveapp.team')),
            ],
        ),
    ]
