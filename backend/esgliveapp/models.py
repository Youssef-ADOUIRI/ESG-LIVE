from django.db import models

# Create your models here.


class Team(models.Model):
    #idTeam = models.IntegerField(blank=False)
    nameTeam = models.CharField(max_length=10 , blank=False , default='teamExt')
    fullnameTeam = models.CharField(max_length=100)
    colorteam = models.CharField(max_length=20)
    descriptionTeam = models.CharField(max_length=200)
    globalRank = models.IntegerField()
    def __str__(self):
        return "%s %s %s %s" % (self.nameTeam, self.fullnameTeam , self.colorteam , self.descriptionTeam)


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
    collectiveTeamA = models.ForeignKey(Team, related_name='collectiveTeamA' , on_delete=models.CASCADE)
    collectiveTeamB = models.ForeignKey(Team, related_name='collectiveTeamB' , on_delete=models.CASCADE)
    collectiveScoreA = models.IntegerField()
    collectiveScoreB = models.IntegerField()
    collectiveMatchDesc = models.CharField(max_length=200)
    sport = models.CharField(max_length=40 , blank=False)
    def __str__(self):
        return "%s %s %s" % (self.sport, self.collectivePhase, self.collectiveTeamA ,self.collectiveScoreA, self.collectiveTeamB,self.collectiveScoreB , self.collectiveMatchDesc)
