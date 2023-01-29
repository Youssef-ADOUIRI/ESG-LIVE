from django.shortcuts import render
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import Team , DetailsMatch ,CollectiveMatch
from esgliveapp.serializers import TeamSerializer ,  TeamMatchSerializer,CollectiveMatchSerializer
from rest_framework.decorators import api_view
from django.db.models import Count , Sum , F , FilteredRelation , Q

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
def collective_rank(request , sport ,sexe='m'):
    if CollectiveMatchSerializer(CollectiveMatch.objects.filter(sport=sport , sexe=sexe) , many=True):
        #select_related('teamId','matchId').
        matchteams_data = DetailsMatch.objects.values('teamId_id__nameTeam').filter(matchId_id__sport=sport , matchId_id__sexe=sexe ).annotate(
            #sport_matchs = FilteredRelation('detailsmatch__matchId_id' , condition= Q(detailsmatch__matchId_id__sport=sport)),
            team_name = F('teamId_id__nameTeam'),
            team_fullname = F('teamId_id__fullnameTeam'),
            total_goals =  Sum('score'),
            match_played = Count('matchId'),
        ).order_by('-match_played').order_by('-total_goals')
        matchteams_ser = TeamMatchSerializer(matchteams_data , many=True)
        return JsonResponse(matchteams_ser.data,safe=False)
            #'safe=False' for objects serialization
    else:
        #return the list of all teams
        teams = Team.objects.all().order_by('nameTeam')
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data , safe=False)

#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk)
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


