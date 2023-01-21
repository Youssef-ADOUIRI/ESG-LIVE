from rest_framework import serializers 
from esgliveapp.models import Team , AthleticsParticipation , AthleticsMatch , CollectiveMatch
 
 
class TeamSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Team
        fields = ('id',
                  'nameTeam',
                  'fullnameTeam',
                  'colorteam',
                  'descriptionTeam',
                  'globalRank')

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
                  'collectiveTeamA',
                  'collectiveTeamB',
                  'collectiveScoreA',
                  'collectiveScoreB',
                  'collectiveMatchDesc',
                  'sport')