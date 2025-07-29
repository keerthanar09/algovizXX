def bubble_sort_steps(arr):
    steps = []
    n = len(arr)
    arr = arr.copy()

    for i in range(n):
        for j in range(0, n - i - 1):
            steps.append({"array": arr.copy(), "highlight": [j, j + 1]})
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                steps.append({"array": arr.copy(), "swapped": [j, j + 1]})
    steps.append({"array": arr.copy(), "sorted": True})
    return steps
