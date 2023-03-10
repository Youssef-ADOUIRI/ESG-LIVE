from django.db import models
import datetime
from django.utils.timezone import now

class Team(models.Model):
    #idTeam = models.IntegerField(blank=False)
    nameTeam = models.CharField(max_length=10 , blank=False , default='teamExt')
    fullnameTeam = models.CharField(max_length=100)
    colorteam = models.CharField(max_length=20)
    descriptionTeam = models.CharField(max_length=200 , blank=True)
    globalRank = models.IntegerField()
    totalPoints =  models.IntegerField(blank=True, null=True)
    def __str__(self):
        return "%s" % (self.nameTeam.upper())

class Player(models.Model):
    playerName = models.CharField(max_length=40)
    playerLastName = models.CharField(max_length=40)
    playerAge = models.IntegerField(blank=True)
    playerTeam = models.ForeignKey(Team , on_delete=models.CASCADE)
    def __str__(self):
        return "%s %s [%s]" % (self.playerName , self.playerLastName , self.playerTeam )

class AthleticsMatch(models.Model):
    athleticsType = models.CharField(max_length=40,blank=False)
    dateMatch = models.DateTimeField(blank=True)
    athleticsMatchDesc = models.CharField(max_length=200 , blank=True)
    def __str__(self):
        return "%s" % (self.athleticsType)

class AthleticsParticipation(models.Model):
    score = models.IntegerField()
    idteam = models.ForeignKey(Team, on_delete=models.CASCADE)
    idathleticsMatch = models.ForeignKey(AthleticsMatch, on_delete=models.CASCADE)
    athleticsDesc = models.CharField(max_length=200 ,blank=True)
    def __str__(self):
        return "%s [%s]" % (self.idteam , self.idathleticsMatch)
        
class CollectiveMatch(models.Model):
    collectivePhase = models.IntegerField()
    collectiveMatchDesc = models.CharField(max_length=200 , blank=True)
    sport = models.CharField(max_length=40 , blank=False)
    sexe = models.CharField(max_length=2 , default='m' ,choices=[('m' , 'man') , ('f' , 'woman')] , blank=True)
    timeLenght = models.IntegerField(blank=True)
    refname = models.CharField(max_length=40,blank=True ,null=True)
    stage = models.IntegerField(blank=True)
    collectiveMatchDate = models.DateField(default=datetime.date.today)
    collectiveMatchTime = models.TimeField(default=now)
    def __str__(self):
        return "%s %s [%s] [%s]" % (self.sport ,self.sexe , self.collectiveMatchTime  , self.collectivePhase)

class DetailsMatch(models.Model):
    teamId = models.ForeignKey(Team , on_delete=models.CASCADE)
    score = models.IntegerField()
    decidedBy = models.CharField(max_length=2,default='n', choices=[('n' , 'normal') , ('p' , 'penalty or other') , ('f' , ' team forfeit')])
    win_lose = models.CharField(max_length=2,choices=[('w' , 'won') , ('l' , 'lost')] , blank=True)
    matchId = models.ForeignKey(CollectiveMatch, on_delete=models.CASCADE)
    captainId = models.ForeignKey(Player ,on_delete=models.SET_NULL , null=True)
    def __str__(self):
        return "%s [%s]" % (self.teamId , self.matchId)

class TeamRanking(models.Model):
    teamId = models.ForeignKey(Team , on_delete=models.CASCADE)
    sport = models.CharField(max_length=40 , blank=False)
    sexe =  models.CharField(max_length=2 , default='m' ,choices=[('m' , 'man') , ('f' , 'woman')] , blank=False)
    rank = models.IntegerField(blank=True, null=True)
    points =  models.IntegerField(blank=True, null=True)
    matchPlayed = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return "%s %s%s [%s]" % (self.teamId ,self.sport , self.sexe, self.rank)