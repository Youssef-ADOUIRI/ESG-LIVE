from django.urls import include , re_path , path
from esgliveapp import views 
 
urlpatterns = [ 
    re_path(r'^api/teams$', views.team_list),
    re_path(r'^api/teams/(?P<pk>[0-9]+)$', views.team_name),
    #path('api/rank/<str:sport>',views.collective_rank),
    path('api/rank/<str:sport>/<str:sexe>',views.collective_rank),
    re_path(r'^api/globalrank$',views.global_rank)
]