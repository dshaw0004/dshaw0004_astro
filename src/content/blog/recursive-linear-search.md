---
title: "Let's do linear search recursively"
description: "Recursive linear search is a search algorithm that uses recursion to search for a target value in a list."
pubDate: "Nov 04 2025"
heroImage: "/recursive-linear-search.png"
---

linear search but recursive, after all why not make your life hell.

```python
def linear_search(arr: list[int], target: int, index: int = 0) -> int:
    if index == len(arr):
        return -1
    if target == arr[index]:
        return index
    return linear_search(arr=arr, target=target, index=index + 1)


n: int = [37, 82, 15, 64, 9, 58, 91, 26, 73, 46]
target: int = 46

index: int = linear_search(arr=arr, target=target, index=0)

if index == -1:
    print("target element not found.")
else:
    print(f"target element found at index {index}")
