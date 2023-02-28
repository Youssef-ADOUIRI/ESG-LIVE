from django.urls import include , re_path , path
from esgliveapp import views
 
urlpatterns = [ 
    path('api/teams', views.team_list),
    re_path(r'^api/teams/(?P<pk>[0-9]+)$', views.team_name),
    path('api/rank/<str:sport>',views.collective_rank),
    path('api/rank/<str:sport>/<str:sexe>',views.collective_rank),
    path('api/rank_athletic/<str:sport>',views.athletic_rank),
    path('api/rank_athletic/<str:sport>/<str:sexe>',views.athletic_rank),
    path('api/matches' ,views.get_matches),
    path('api/matches/<str:sport>/<str:sexe>', views.get_matches_by),
    path('api/globalrank',views.global_rank)
]