from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import random, math
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Algorithms1
from django.db.models import Q

# Create your views here.
def index(request):
    return render(request, 'algorithms/index.html')

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random

@api_view(['GET'])
def get_sorting_data(request, format=None):
    try:
        
        num_elements = int(request.query_params.get('num_elements', 10))
        #Keeping the number of inputes within the range of 2 to 50 since anything more than that 
        #Doesnt look good in visualizations, takes more time than needed to understand an algorithm.
        if num_elements < 2 or num_elements > 50:
            return Response(
                {"error": "num_elements must be between 2 and 50"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        
        data = [random.randint(1, 10) for _ in range(num_elements)]
        return Response(data, status=status.HTTP_200_OK)

    except ValueError:
        return Response(
            {"error": "Invalid 'num_elements' parameter. Must be an integer."},
            status=status.HTTP_400_BAD_REQUEST,
        )

@api_view(['GET'])
def get_graph_data(request, format=None):
    try:
        max_weight = int(request.query_params.get('max_weight', 20))
        node_count = int(request.query_params.get('node_count', 6))
        directed = request.query_params.get('directed', 'false').lower() == 'true'

        if node_count < 3 or node_count > 15:
            return Response({"error": "Node count must be within the range of 3 and 15"}, status=status.HTTP_400_BAD_REQUEST)

        # Place nodes in a circle for clean SVG layout
        cx, cy, r = 300, 220, 160
        nodes = []
        for i in range(node_count):
            angle = (2 * math.pi * i) / node_count - math.pi / 2
            nodes.append({'id': i, 'x': round(cx + r * math.cos(angle)), 'y': round(cy + r * math.sin(angle))})

        edges = []
        adj = [[float('inf')] * node_count for _ in range(node_count)]
        for i in range(node_count):
            adj[i][i] = 0

        # Ensure connectivity via spanning tree first
        shuffled = list(range(node_count))
        random.shuffle(shuffled)
        for k in range(1, node_count):
            i, j = shuffled[k - 1], shuffled[k]
            w = random.randint(1, max_weight)
            edges.append({'from': i, 'to': j, 'weight': w})
            adj[i][j] = w
            if not directed:
                adj[j][i] = w

        # Add extra random edges
        for i in range(node_count):
            for j in range(i + 1, node_count):
                if adj[i][j] == float('inf') and random.random() > 0.6:
                    w = random.randint(1, max_weight)
                    edges.append({'from': i, 'to': j, 'weight': w})
                    adj[i][j] = w
                    if not directed:
                        adj[j][i] = w

        # Serialize inf as null for JSON
        graph = [[None if v == float('inf') else v for v in row] for row in adj]
        return JsonResponse({'nodes': nodes, 'edges': edges, 'graph': graph})
    except ValueError:
        return JsonResponse({'error': 'Invalid parameters'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
@csrf_exempt
def search_algorithms(request):
    if request.method == "GET":
        query = request.GET.get("query", "")
        if query:
            results = Algorithms1.objects.filter( Q(name__icontains=query) | Q(catID__name__icontains=query)).values("slno", "name", "path", "catID__name")
            return JsonResponse(list(results), safe=False)
        return JsonResponse([], safe=False)
    

def bubbleSort(arr):
    n=len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j]>arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if (swapped == False):
            break


@api_view(['GET'])
def get_search_data(request, format=None):
    try:
        
        num_elements = int(request.query_params.get('num_elements', 10))
        #Keeping the number of inputes within the range of 2 to 50 only as its reasonable.
        if num_elements < 5 or num_elements > 50:
            return Response(
                {"error": "num_elements must be between 2 and 50"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        
        data = [random.randint(10, 300) for _ in range(num_elements)]
        bubbleSort(data)

        return Response(data, status=status.HTTP_200_OK)
    except ValueError:
        return Response(
            {"error": "Invalid 'num_elements' parameter. Must be an integer."},
            status=status.HTTP_400_BAD_REQUEST,
        )

# Bubble sort

@api_view(['POST'])
def bubble_sort(request):
    array = request.data.get("array", [])
    steps = []

    arr = array[:]
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            step = {
                "array": arr[:],
                "highlight": [j, j + 1],
            }
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                step["swapped"] = [j, j + 1]
            steps.append(step)
    steps.append({"array": arr[:], "sorted": True})
    return Response({"steps": steps})

# Merge sort

@api_view(['POST'])
def merge_sort(request):
    array = request.data.get("array", [])
    steps = []

    def merge_sort_recursive(a, low, high):
        if low < high:
            mid = (low + high) // 2
            merge_sort_recursive(a, low, mid)
            merge_sort_recursive(a, mid + 1, high)
            simple_merge(a, low, mid, high)

    def simple_merge(a, low, mid, high):
        i = low
        j = mid+1
        c = []
        while i <= mid and j<= high:
            if a[i] <= a[j]:
                c.append(a[i])
                i+=1
            else:
                c.append(a[j])
                j+=1
        while j <= high:
            c.append(a[j])
            j+=1
        while i <= mid:
            c.append(a[i])
            i+=1
        
        for idx in range(len(c)):
            a[low + idx] = c[idx]

            steps.append({"array": a[:], "highlight": [low + idx], "swapped": [low+idx]})

    arr = array[:]
    if len(arr) > 1:
        merge_sort_recursive(arr, 0, len(arr) - 1)
    steps.append({"array": arr[:], "highlight": [], "swapped": [], "sorted": True})
    return Response({"steps": steps})

# Selection Sort

@api_view(['POST'])
def selection_sort(request):
    array = request.data.get("array", [])
    steps = []

    a = array[:]
    n = len(a)
    for i in range(n):
        min = i
        for j in range(i+1, n):
            steps.append({
                "array":a[:],
                "highlight": [min, j],
            })
            if a[min] > a[j]:
                min = j
        
        a[i], a[min] = a[min], a[i]
        steps.append({
                "array": a[:],
                "highlight": [i, min],
                "swapped": [i, min]
            })
 
    
    steps.append({"array":a[:], "sorted":True})
    return Response({"steps":steps})

# Quick sort

@api_view(['POST'])
def quick_sort(request):
    array = request.data.get("array", [])
    steps = []

    def partition(a, low, high):
        i = low + 1
        j = high
        p = a[low]
        steps.append({
            "array" : a[:],
            "highlight": [low],
            "swapped": [],
        })
        while True:
            while i <= j and a[i] <= p:
                i += 1
            while i <= j and a[j] > p:
                j -= 1
            if i < j:
                a[i], a[j] = a[j], a[i]
                steps.append({
                    "array": a[:],
                    "highlight": [i, j],
                    "swapped": [i, j]
                })
            else:
                break
        a[low], a[j] = a[j], a[low]
        steps.append({
            "array": a[:],
            "highlight": [low, j],
            "swapped": [low, j]
        })
        return j
    
    def quick(a, low, high):
        if low<high:
            k = partition(a, low, high)
            quick(a, k+1, high)
            quick(a, low, k-1)
    
    a = array[:]
    quick(a, 0, len(a)-1)
    steps.append({"array":a[:], "sorted":True})
    return Response({"steps":steps})


# Insertion sort

@api_view(['POST'])
def insertion_sort(request):
    array = request.data.get("array", [])
    steps = []

    a = array[:]
    for i in range(1, len(a)):
        j = i
        steps.append({
            "array":a[:],
            "highlight":[j],
        })
        while j>=1:
            steps.append({
                "array":a[:],
                "highlight":[j-1, j],
            })
            if a[j] < a[j-1]:
                a[j], a[j-1] = a[j-1], a[j]
                steps.append({
                "array":a[:],
                "highlight":[j-1, j],
                "swapped":[j-1, j]
                })
                j = j-1
            else:
                break

    steps.append({"array":a[:], "sorted":True})
    return Response({"steps":steps})


# Cycle sort

# Graphs and Pathfinding algorithms

# { nodes: [...], edges: [...], visited: [...], current: id, queue/stack: [...], path: [...], distances: {...} }

@api_view(['POST'])
def bfs(request):

    nodes = request.data.get('nodes', [])
    edges = request.data.get('edges', [])
    source = int(request.data.get('source', 0))
    steps = []

    adj = {n['id']: [] for n in nodes}
    for e in edges:
        adj[e['from']].append(e['to'])
        adj[e['to']].append(e['from'])

    visited = []
    queue = [source]
    seen = {source}

    while queue:
        current = queue.pop(0)
        visited.append(current)
        steps.append({
            'current': current,
            'queue': queue[:],
            'visited': visited[:],
        })
        for neighbor in sorted(adj[current]):
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append(neighbor)

    steps.append({'current': None, 'queue': [], 'visited': visited[:], 'done': True})
    return Response({'steps': steps})


@api_view(['POST'])
def dfs(request):
    nodes = request.data.get('nodes', [])
    edges = request.data.get('edges', [])
    source = int(request.data.get('source', 0))
    steps = []

    adj = {n['id']: [] for n in nodes}
    for e in edges:
        adj[e['from']].append(e['to'])
        adj[e['to']].append(e['from'])

    visited = []
    stack = [source]
    seen = set()

    while stack:
        current = stack.pop()
        if current in seen:
            continue
        seen.add(current)
        visited.append(current)
        steps.append({
            'current': current,
            'stack': stack[:],
            'visited': visited[:],
        })
        for neighbor in sorted(adj[current], reverse=True):
            if neighbor not in seen:
                stack.append(neighbor)

    steps.append({'current': None, 'stack': [], 'visited': visited[:], 'done': True})
    return Response({'steps': steps})


@api_view(['POST'])
def dijkstra(request):
    import heapq
    nodes = request.data.get('nodes', [])
    edges = request.data.get('edges', [])
    source = int(request.data.get('source', 0))
    steps = []

    node_ids = [n['id'] for n in nodes]
    adj = {nid: [] for nid in node_ids}
    for e in edges:
        adj[e['from']].append((e['to'], e['weight']))
        adj[e['to']].append((e['from'], e['weight']))

    INF = float('inf')
    dist = {nid: INF for nid in node_ids}
    dist[source] = 0
    prev = {nid: None for nid in node_ids}
    visited = []
    pq = [(0, source)]

    while pq:
        d, current = heapq.heappop(pq)
        if current in visited:
            continue
        visited.append(current)

        # Build current path tree edges
        path_edges = []
        for nid in node_ids:
            if prev[nid] is not None:
                path_edges.append({'from': prev[nid], 'to': nid})

        steps.append({
            'current': current,
            'visited': visited[:],
            'distances': {str(k): (v if v != INF else None) for k, v in dist.items()},
            'path_edges': path_edges,
        })

        for neighbor, weight in adj[current]:
            if neighbor not in visited:
                new_dist = dist[current] + weight
                if new_dist < dist[neighbor]:
                    dist[neighbor] = new_dist
                    prev[neighbor] = current
                    heapq.heappush(pq, (new_dist, neighbor))

    path_edges = []
    for nid in node_ids:
        if prev[nid] is not None:
            path_edges.append({'from': prev[nid], 'to': nid})

    steps.append({
        'current': None,
        'visited': visited[:],
        'distances': {str(k): (v if v != INF else None) for k, v in dist.items()},
        'path_edges': path_edges,
        'done': True,
    })
    return Response({'steps': steps})


@api_view(['POST'])
def bellman_ford(request):
    nodes = request.data.get('nodes', [])
    edges = request.data.get('edges', [])
    source = int(request.data.get('source', 0))
    steps = []

    node_ids = [n['id'] for n in nodes]
    INF = float('inf')
    dist = {nid: INF for nid in node_ids}
    dist[source] = 0
    prev = {nid: None for nid in node_ids}

    for iteration in range(len(node_ids) - 1):
        updated = False
        for e in edges:
            u, v, w = e['from'], e['to'], e['weight']
            # Check both directions (undirected)
            for src, dst in [(u, v), (v, u)]:
                if dist[src] != INF and dist[src] + w < dist[dst]:
                    dist[dst] = dist[src] + w
                    prev[dst] = src
                    updated = True

            path_edges = [{'from': prev[nid], 'to': nid} for nid in node_ids if prev[nid] is not None]
            steps.append({
                'iteration': iteration + 1,
                'active_edge': e,
                'distances': {str(k): (v if v != INF else None) for k, v in dist.items()},
                'path_edges': path_edges,
            })
        if not updated:
            break

    path_edges = [{'from': prev[nid], 'to': nid} for nid in node_ids if prev[nid] is not None]
    steps.append({
        'iteration': 'done',
        'active_edge': None,
        'distances': {str(k): (v if v != INF else None) for k, v in dist.items()},
        'path_edges': path_edges,
        'done': True,
    })
    return Response({'steps': steps})


#Searching Algorithms 
# { array: [...], highlight: [...], found: index|null, low: int, high: int, mid: int, done: bool }

@api_view(['POST'])
def linear_search(request):
    array = request.data.get('array', [])
    key = int(request.data.get('key', 0))
    steps = []

    for i, val in enumerate(array):
        step = {'array': array[:], 'highlight': [i], 'found': None}
        if val == key:
            step['found'] = i
            step['done'] = True
            steps.append(step)
            return Response({'steps': steps})
        steps.append(step)

    steps.append({'array': array[:], 'highlight': [], 'found': -1, 'done': True})
    return Response({'steps': steps})


@api_view(['POST'])
def binary_search(request):
    array = request.data.get('array', [])
    key = int(request.data.get('key', 0))
    steps = []

    low, high = 0, len(array) - 1
    while low <= high:
        mid = (low + high) // 2
        step = {'array': array[:], 'low': low, 'high': high, 'mid': mid, 'found': None}
        if array[mid] == key:
            step['found'] = mid
            step['done'] = True
            steps.append(step)
            return Response({'steps': steps})
        elif array[mid] < key:
            low = mid + 1
        else:
            high = mid - 1
        steps.append(step)

    steps.append({'array': array[:], 'low': low, 'high': high, 'mid': -1, 'found': -1, 'done': True})
    return Response({'steps': steps})
