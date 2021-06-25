# INSERTION SORT

## psuodocode
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

- mergeSort function phase1:

left [ 8, 4, 23 ]
------------
{left [ 8 ]
-------------------
right [ 4, 23 ]}
------------
{left [ 4 ]
-------------------
right [ 23 ]}
---------------------------
- merge function phase1:

i= 0, j= 0, k= 0
---------------------------
 left[i]= 4 arr[k] =4
---------------------------
arr[ 4, 23 ]
---------------------------
---------------------------
- merge function phase2

i= 0, j= 0, k= 0
---------------------------
- arr[k]= 8 right[j]= 4
- arr[k]= 4

---------------------------

i= 0, j= 1, k= 1
---------------------------
 left[i]= 8 arr[k]= 4

arr [ 4, 8, 23 ]
---------------------------
- mergeSort
right [ 42, 16, 15 ]
------------
{left [ 42 ]
-------------------
right [ 16, 15 ]}
------------
{left [ 16 ]
-------------------
right [ 15 ]}
---------------------------
- merge function phase3:

i= 0, j= 0, k= 0
---------------------------
 arr[k] =16 right[j]= 15
arr[k]= 15
---------------------------
arr[k]= 16
---------------------------
---------------------------
- merge function phase4

i= 0, j= 0, k= 0
---------------------------
 arr[k] =42 right[j] =15
arr[k]= 15
---------------------------
i= 0, j= 1, k= 1
---------------------------
 arr[k]= 16 right[j] =16
arr[k]= 16
---------------------------
[ 42 ]
arr[k]= 42

------

- merge function phase5:

i= 0, j= 0, k= 0
---------------------------
 left[i] =4 ,arr[k] =8
---------------------------
i 1 j 0 k 1
---------------------------
 left[i] =8 ,arr[k] =4
---------------------------
i 2 j 0 k 2
---------------------------
arr[k]= 23, right[j] =15
arr[k]= 15
---------------------------
i 2 j 1 k 3
---------------------------
arr[k]= 42, right[j] =16
arr[k]= 16
---------------------------
i 2 j 2 k 4
---------------------------
 left[i] =23, arr[k]= 16
---------------------------
arr =[ 4, 8, 15, 16, 23, 15 ]
---------------------------
## ***result ==> arr =[ 4, 8, 15, 16, 23, 42 ]***