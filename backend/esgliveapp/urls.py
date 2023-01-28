from django.urls import include , re_path
from esgliveapp import views 
 
urlpatterns = [ 
    re_path(r'^api/teams$', views.team_list),
    re_path(r'^api/teams/(?P<pk>[0-9]+)$', views.team_name),
    re_path(r'^api/football$',views.football_rank),
    re_path(r'^api/globalrank$',views.global_rank)
]