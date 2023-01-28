from django.shortcuts import render
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import Team , DetailsMatch
from esgliveapp.serializers import TeamSerializer ,  TeamMatchSerializer
from rest_framework.decorators import api_view
from django.db.models import Count , Sum,F

# Create your views here.

@api_view(['GET'])
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all().order_by('nameTeam')
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data , safe=False)
        # 'safe=False' for objects serialization

@api_view(['GET'])
def global_rank(request):
    teams = Team.objects.all().order_by('-globalRank','nameTeam')
    teams_serializer = TeamSerializer(teams, many=True)
    return JsonResponse(teams_serializer.data , safe=False)

@api_view(['GET'])
def football_rank(request):
    matchteams_data = DetailsMatch.objects.values('teamId_id__nameTeam' , 'teamId_id__fullnameTeam').annotate(  
        team_name = F('teamId_id__nameTeam'),
        team_fullname = F('teamId_id__fullnameTeam'), 
        total_goals = Sum('matchId'),
        match_played = Count('score')
    ).order_by('match_played').order_by('-total_goals')
    matchteams_ser = TeamMatchSerializer(matchteams_data , many=True)
    print("\n\n---------------------------------------------------------\n" , json.loads(json.dumps(matchteams_ser.data)), "\n---------------------------------------------------------\n----------------------------------------------------------")

    return JsonResponse(matchteams_ser.data,safe=False)
        #'safe=False' for objects serialization

#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk)
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


