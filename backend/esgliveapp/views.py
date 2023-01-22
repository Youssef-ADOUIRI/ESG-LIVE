from django.shortcuts import render
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import Team , CollectiveMatch
from esgliveapp.serializers import TeamSerializer , CollectiveMatchSerializer
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all().order_by('nameTeam')
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data , safe=False)
        # 'safe=False' for objects serialization


@api_view(['GET'])
def football_rank(request):
    if request.method == 'GET':
        teams = Team.objects.all()
        teams_serializer = TeamSerializer(teams, many=True)
        teams_data = json.loads(json.dumps(teams_serializer.data))
        
        
        #calculate current rankings if any match played
        if CollectiveMatch.objects.count()>0:
            all_matchs = CollectiveMatch.objects.all()
            matches_serializer = CollectiveMatchSerializer(all_matchs, many=True)
            all_matchs_dict = json.loads(json.dumps(matches_serializer.data))
            
            for match in all_matchs_dict :
                idA = int(match['collectiveTeamA']) -1
                idB = int(match['collectiveTeamB']) -1
                
                if teams_data[idA].get('GS') is not None:
                    teams_data[idA]['GS'] += match['collectiveScoreA']
                    teams_data[idA]['MP'] += 1
                else:
                    teams_data[idA]['GS'] = match['collectiveScoreA']
                    teams_data[idA]['MP'] = 1
                if teams_data[idB].get('GS') is not None:
                    teams_data[idB]['GS'] += match['collectiveScoreB']
                    teams_data[idB]['MP'] += 1
                else:
                    teams_data[idB]['GS'] = match['collectiveScoreB']
                    teams_data[idB]['MP'] = 1
        

        return HttpResponse(json.dumps(teams_data))
        #'safe=False' for objects serialization

#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk) 
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


 