from django.shortcuts import render
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import Team , DetailsMatch ,CollectiveMatch , AthleticsMatch , AthleticsParticipation
from esgliveapp.serializers import TeamSerializer ,  TeamMatchSerializer,CollectiveMatchSerializer , AthleticsMatchSerializer ,AthleticsRankSerializer 
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
    sexe_abbr=''
    if sexe=='f' : 
        sexe_abbr='f'
    if CollectiveMatchSerializer(CollectiveMatch.objects.filter(sport=sport , sexe=sexe) , many=True).data:
        #select_related('teamId','matchId').
        matchteams_data = DetailsMatch.objects.values('teamId_id__nameTeam').filter(matchId_id__sport=sport).filter( matchId_id__sexe=sexe ).annotate(
            #sport_matchs = FilteredRelation('detailsmatch__matchId_id' , condition= Q(detailsmatch__matchId_id__sport=sport)),
            team_id = F('teamId_id'),
            team_name = F('teamId_id__nameTeam'),
            team_fullname = F('teamId_id__fullnameTeam'),
            total_score =  Sum('score'),
            match_played = Count('matchId'),
        ).order_by('team_name').order_by('-match_played').order_by('-total_score')
        matchteams_ser = TeamMatchSerializer(matchteams_data , many=True)
        return JsonResponse(matchteams_ser.data,safe=False)
            #'safe=False' for objects serialization
    elif AthleticsMatchSerializer(AthleticsMatch.objects.filter(athleticsType= sport + sexe_abbr) , many=True).data:
        matchteams_data = AthleticsParticipation.objects.values('idteam_id' , 'idteam_id__nameTeam','idteam_id__fullnameTeam', 'score').filter(idathleticsMatch__athleticsType= sport + sexe_abbr).annotate(
            team_id = F('idteam_id'),
            team_name = F('idteam_id__nameTeam'),
            team_fullname = F('idteam_id__fullnameTeam'),
            total_score = F('score')
        ).order_by('team_name').order_by('-total_score')
        matchteams_ser = AthleticsRankSerializer(matchteams_data , many=True)
        return JsonResponse(matchteams_ser.data,safe=False)
    else:
        return JsonResponse([] , safe=False)

#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk)
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


