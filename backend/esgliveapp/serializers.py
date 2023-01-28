from rest_framework import serializers 
from esgliveapp.models import Team,Player , AthleticsParticipation , AthleticsMatch , CollectiveMatch , DetailsMatch
 
 
class TeamSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Team
        fields = ('id',
                  'nameTeam',
                  'fullnameTeam',
                  'colorteam',
                  'descriptionTeam',
                  'globalRank')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id',
                  'playerName',
                  'playerLastName',
                  'playerAge',
                  'playerTeam')

class AthleticsParticipationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = AthleticsParticipation
        fields = ('id',
                  'score',
                  'idteam',
                  'idathleticsMatch',
                  'athleticsDesc')

class AthleticsMatchSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = AthleticsMatch
        fields = ('id',
                  'athleticsType',
                  'dateMatch',
                  'athleticsMatchDesc')
class CollectiveMatchSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = CollectiveMatch
        fields = ('id',
                  'collectivePhase',
                  'collectiveMatchDesc',
                  'sport',
                  'sexe',
                  'timeLenght',
                  'refname',
                  'stage',
                  'collectiveMatchDate',
                  'collectiveMatchTime')

class DetailsMatchSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = DetailsMatch
        fields = ('id',
                  'score',
                  'decidedBy',
                  'win_lose',
                  'matchId',
                  'captainId')

class TeamMatchSerializer(serializers.Serializer):
    team_name  = serializers.CharField()
    team_fullname = serializers.CharField()
    total_goals = serializers.IntegerField()
    match_played = serializers.IntegerField()

    class Meta:
        model = Team
        fields = ('id',
                'nameTeam',
                'fullnameTeam',
                'total_goals',
                'match_played')
