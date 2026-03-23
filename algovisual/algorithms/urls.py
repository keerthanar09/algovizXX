from . import views
from .views import *
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('api/get_sorting_data/', get_sorting_data, name='get_sorting_data'),
    path('api/get_graph_data/', get_graph_data, name='get_graph_data'),
    path('api/search_algorithms/', search_algorithms, name='search_algorithms'),
    path('api/get_search_data/', get_search_data, name='get_search_data'),
    # Sorting
    path('api/sort/bubble/', bubble_sort),
    path('api/sort/merge/', merge_sort),
    path('api/sort/selection/', selection_sort),
    path('api/sort/quick/', quick_sort),
    path('api/sort/insertion/', insertion_sort),
    # Pathfinding
    path('api/pathfinding/bfs/', bfs),
    path('api/pathfinding/dfs/', dfs),
    path('api/pathfinding/dijkstra/', dijkstra),
    path('api/pathfinding/bellman/', bellman_ford),
    # Searching
    path('api/search/linear/', linear_search),
    path('api/search/binary/', binary_search),
]