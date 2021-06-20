# INSERTION SORT

## psuodocode
```
SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;
```
## pass:
![](../img/pass1.jpg)
<br>
![](../img/pass2.jpg)
<br>
![](../img/pass3.jpg)
<br>
![](../img/pass4.jpg)
<br>
![](../img/pass5.jpg)
<br>
![](../img/pass6.jpg)