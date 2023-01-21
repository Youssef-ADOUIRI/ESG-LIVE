from django.shortcuts import render
import json
from django.core import serializers

from django.http.response import JsonResponse , HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from esgliveapp.models import Team
from esgliveapp.serializers import TeamSerializer
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
        teams = Team.objects.all().order_by('nameTeam')

        teams_serializer = TeamSerializer(teams, many=True)
        data = json.loads(json.dumps(teams_serializer.data))

        return JsonResponse(teams_serializer.data , safe=False)
        # 'safe=False' for objects serialization

#NAME
@api_view(['GET'])
def team_name(request, pk):
    try: 
        team = Team.objects.get(pk=pk) 
    except Team.DoesNotExist: 
        return JsonResponse({'message': 'The team does not exist'}, status=status.HTTP_404_NOT_FOUND)


 