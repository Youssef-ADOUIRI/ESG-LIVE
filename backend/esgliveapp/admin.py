from django.contrib import admin

# Register your models here.
from esgliveapp.models import Team, Player , AthleticsMatch , AthleticsParticipation,CollectiveMatch, DetailsMatch  

admin.site.register([Team, Player , AthleticsMatch , AthleticsParticipation,CollectiveMatch, DetailsMatch  ])
