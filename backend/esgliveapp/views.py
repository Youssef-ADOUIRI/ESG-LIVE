from django.shortcuts import render , redirect
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse 
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import *
from esgliveapp.serializers import *
from rest_framework.decorators import api_view
from django.db.models import Count , Sum , F , FilteredRelation , Q

from decouple import config

# Create your views here.
def error_404(request, exception):
    return render(request, 'pages/404.html')

@api_view(['GET'])
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all().order_by('nameTeam')
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data , safe=False)
        # 'safe=False' for objects serialization

@api_view(['GET'])
def global_rank(request):
    teams = Team.objects.all().order_by('-totalPoints','globalRank','nameTeam')
    teams_serializer = TeamSerializer(teams, many=True)
    return JsonResponse(teams_serializer.data , safe=False)

'''
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
'''
@api_view(['GET'])
def collective_rank(request , sport ,sexe='m'):
    try:
        teamsRanking = TeamRanking.objects.filter(sport=sport , sexe=sexe).select_related('teamId').annotate(
            team_name = F('teamId__nameTeam'),
            team_fullname = F('teamId__fullnameTeam'),
            ).order_by('-points','-matchPlayed','team_name')
        teamsRanking_serialized = TeamRankingSerializer(teamsRanking , many=True)
        if teamsRanking_serialized.data:
            return JsonResponse(teamsRanking_serialized.data, safe=False)
        else:
            return JsonResponse([], safe=False)
    except TeamRanking.DoesNotExist:
        return JsonResponse({'message': 'The teams do not exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def athletic_rank(request , sport ,sexe='m'):
    sexe_abbr=''
    if sexe=='f' : 
        sexe_abbr='f'
    try:
        if AthleticsMatchSerializer(AthleticsMatch.objects.filter(athleticsType = sport + sexe_abbr) , many=True).data:
            ranking_ordre = '-total_score' if sport in ['sp' , 'lj' , 'spf' , 'ljf' ] else 'total_score'
            matchteams_data = AthleticsParticipation.objects.values('idteam_id' , 'idteam_id__nameTeam','idteam_id__fullnameTeam', 'score').filter(idathleticsMatch__athleticsType= sport + sexe_abbr).annotate(
            team_id = F('idteam_id'),
            team_name = F('idteam_id__nameTeam'),
            team_fullname = F('idteam_id__fullnameTeam'),
            total_score = F('score')
            ).order_by('team_name').order_by(ranking_ordre)
            matchteams_ser = AthleticsRankSerializer(matchteams_data , many=True)
            return JsonResponse(matchteams_ser.data,safe=False)
        else:
            return JsonResponse([] , safe=False)
    except TeamRanking.DoesNotExist:
        return JsonResponse({'message': 'The teams do not exist'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_matches(request):
    if  DetailsMatchSerializer(DetailsMatch.objects.all() , many=True).data:
        matches_data = DetailsMatch.objects.select_related('teamId' ,'matchId').values('teamId' , 'teamId__nameTeam' ,'teamId__fullnameTeam' ,'score', 'win_lose', 'matchId__sexe' , 'matchId' ,'matchId__collectivePhase' , 'matchId__sport' , 'matchId__collectiveMatchTime').annotate(
            team_id = F('teamId'),
            team_name = F('teamId__nameTeam'),
            team_fullname = F('teamId__fullnameTeam'),
            team_score = F('score'),
            team_result = F('win_lose'),
            match_sexe = F('matchId__sexe'),
            match_id = F('matchId'),
            match_collectivePhase = F('matchId__collectivePhase'),
            match_sport = F('matchId__sport'),
            match_time = F('matchId__collectiveMatchTime')
        ).order_by('-matchId_id').order_by('-matchId__collectiveMatchDate').order_by('-matchId__collectiveMatchTime')
        serializedData = MatchePlayedSerializer(matches_data , many=True)
        return JsonResponse(serializedData.data, safe=False)
    else:
        return JsonResponse([] , safe=False)


@api_view(['GET'])
def get_matches_by(request, sport , sexe='m'):
    matches_data = DetailsMatch.objects.select_related('teamId' ,'matchId').filter(matchId__sport=sport , matchId__sexe=sexe).values('teamId' , 'teamId__nameTeam' ,'teamId__fullnameTeam' ,'score', 'win_lose', 'matchId__sexe' , 'matchId' ,'matchId__collectivePhase' , 'matchId__sport' , 'matchId__collectiveMatchTime').annotate(
        team_id = F('teamId'),
            team_name = F('teamId__nameTeam'),
            team_fullname = F('teamId__fullnameTeam'),
            team_score = F('score'),
            team_result = F('win_lose'),
            match_sexe = F('matchId__sexe'),
            match_id = F('matchId'),
            match_collectivePhase = F('matchId__collectivePhase'),
            match_sport = F('matchId__sport'),
            match_time = F('matchId__collectiveMatchTime')
    ).order_by('-matchId_id').order_by('-matchId__collectiveMatchDate').order_by('-matchId__collectiveMatchTime')
    serializedData = MatchePlayedSerializer(matches_data , many=True)
    if serializedData.data:
     return JsonResponse(serializedData.data , safe=False)
    else:
        return JsonResponse([] , safe=False)


#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk)
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def default(request):
    return redirect(config('WEBSITE_DOMAINE_NAME'))