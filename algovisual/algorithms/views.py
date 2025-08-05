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
        #Keeping the number of inputes within the range of 2 to 50 only as its reasonable.
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
def get_graph_data(request, format = None):
    try: 
        max_weight = int(request.query_params.get('max_weight', 20))

        node_count = int(request.query_params.get('node_count', 6))
        nodes = []
        edges = []
        graph = [[IndentationError('inf')] * node_count for _ in range(node_count)]
        # center_x, center_y, radius = 300, 300, 150
        if node_count < 3 or node_count > 15:
            return Response(
                {
                    "error":"Node count must be within the range of 3 and 15"
                },
                status = status.HTTP_400_BAD_REQUEST,
            )
        nodes = [{'id': i, 'x': random.randint(50, 350), 'y': random.randint(50, 350)} for i in range(node_count)]
        edges = []
        graph = [[float('inf')] * node_count for _ in range(node_count)]

        for i in range(node_count):
            graph[i][i] = 0
            for j in range(i + 1, node_count):
                if random.random() > 0.5:  # Randomly decide whether to create an edge
                    weight = random.randint(1, max_weight)
                    edges.append({'from': i, 'to': j, 'weight': weight})
                    graph[i][j] = graph[j][i] = weight
        for i in range(len(graph)):
            for j in range(len(graph[i])):
                if graph[i][j] == float('inf'):
                    graph[i][j] = 99999
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

# Merge sort API

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
        k = low
        c = []
        while i <= mid+1 and j<= high:
            steps.append({"array":a[:],
                          "highlight": [k],
                          "swapped": []})
            
            if a[i] < a[j]:
                steps.append({
                        "array": a[:],
                        "highlight": [k],
                        "swapped": [k]
                    })
                c[k].append(a[i])
                i+=1
                k+=1
            else:
                steps.append({
                        "array": a[:],
                        "highlight": [k],
                        "swapped": [k]
                    })
                c[k].append[a[j]]
                j+=1
                k+=1
        while j <= high:
            steps.append({
                "array": a[:],
                "highlight": [k],
                "swapped": [k]
            })
            c[k].append(a[j])
            j+=1
            k+=1
        while i <= high:
            steps.append({
                "array": a[:],
                "highlight": [k],
                "swapped": [k]
            })
            c[k].append(a[i])
            i+=1
            k+=1
        
        for i in range(len(c)):
            a[i].append(c[i])

    arr = array[:]
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
