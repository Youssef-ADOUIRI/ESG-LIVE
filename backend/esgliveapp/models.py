from django.db import models

# Create your models here.


class Team(models.Model):
    #idTeam = models.IntegerField(blank=False)
    nameTeam = models.CharField(max_length=10 , blank=False , default='teamExt')
    fullnameTeam = models.CharField(max_length=100)
    colorteam = models.CharField(max_length=20)
    def __str__(self):
        return "%s %s %s" % (self.nameTeam, self.fullnameTeam , self.colorteam)

class Discipline(models.Model):
    #idDiscipline = models.IntegerField(blank=False)
    nameDiscipline = models.CharField(max_length=40 , blank=False)
    def __str__(self):
        return "%s" % (self.nameDiscipline)

class Matche(models.Model):
    #id
    dateMatche = models.DateTimeField()
    discipline = models.ForeignKey(Discipline, on_delete=models.CASCADE)

class Play(models.Model):
    #id
    team = models.ForeignKey(Team , on_delete=models.CASCADE)
    discipline = models.ForeignKey(Discipline , on_delete=models.CASCADE)
