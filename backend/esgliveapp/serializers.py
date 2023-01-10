from rest_framework import serializers 
from esgliveapp.models import Team , Discipline , Matche , Play
 
 
class TeamSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Team
        fields = ('id',
                  'nameTeam',
                  'fullnameTeam',
                  'colorTeam')