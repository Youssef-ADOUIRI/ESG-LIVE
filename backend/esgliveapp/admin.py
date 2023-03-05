from django.contrib import admin

# Register your models here.
from esgliveapp.models import Team, Player , AthleticsMatch , AthleticsParticipation , CollectiveMatch , DetailsMatch  , TeamRanking

admin.site.register([Team, Player , AthleticsMatch , AthleticsParticipation,CollectiveMatch, DetailsMatch , TeamRanking ])