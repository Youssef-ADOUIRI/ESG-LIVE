from django.db import models
import datetime
from django.utils.timezone import now

class Team(models.Model):
    #idTeam = models.IntegerField(blank=False)
    nameTeam = models.CharField(max_length=10 , blank=False , default='teamExt')
    fullnameTeam = models.CharField(max_length=100)
    colorteam = models.CharField(max_length=20)
    descriptionTeam = models.CharField(max_length=200)
    globalRank = models.IntegerField()
    def __str__(self):
        return "%s %s %s %s" % (self.nameTeam, self.fullnameTeam , self.colorteam , self.descriptionTeam)

class Player(models.Model):
    playerName = models.CharField(max_length=40)
    playerLastName = models.CharField(max_length=40)
    playerAge = models.IntegerField()
    playerTeam = models.ForeignKey(Team , on_delete=models.CASCADE)

class AthleticsMatch(models.Model):
    athleticsType = models.CharField(max_length=40,blank=False)
    dateMatch = models.DateTimeField()
    athleticsMatchDesc = models.CharField(max_length=200)

class AthleticsParticipation(models.Model):
    score = models.IntegerField()
    idteam = models.ForeignKey(Team, on_delete=models.CASCADE)
    idathleticsMatch = models.ForeignKey(AthleticsMatch, on_delete=models.CASCADE)
    athleticsDesc = models.CharField(max_length=200)
class CollectiveMatch(models.Model):
    collectivePhase = models.IntegerField()
    collectiveMatchDesc = models.CharField(max_length=200)
    sport = models.CharField(max_length=40 , blank=False)
    sexe = models.CharField(max_length=2 , default='m')
    timeLenght = models.IntegerField()
    refname = models.CharField(max_length=40,blank=True)
    stage = models.IntegerField()
    collectiveMatchDate = models.DateField(default=datetime.date.today)
    collectiveMatchTime = models.TimeField(default=now)

class DetailsMatch(models.Model):
    teamId = models.ForeignKey(Team , on_delete=models.CASCADE)
    score = models.IntegerField()
    decidedBy = models.CharField(max_length=2,default='n')
    win_lose = models.CharField(max_length=2)
    matchId = models.ForeignKey(CollectiveMatch, on_delete=models.CASCADE)
    captainId = models.ForeignKey(Player ,on_delete=models.CASCADE)