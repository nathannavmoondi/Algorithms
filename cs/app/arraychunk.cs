// given an array and chunk size.  divide the array into many sub arrays
// where each subarray is of length size
// eg: chunk([1,2,3,4],2) => [[1,2],[3,4]]
// eg: chunk([1,2,3,4,5],2) => [[1,2],[3,4], [5]]
// eg: chunk([1,2,3,4,5, 6, 7, 8],3) => [[1,2, 3],[4,5,6], [7,8]]
using System;
using System.Collections.Generic;
using System.Linq;

public static class ArrayChunk{


    public static List<int[]> ChunkArray(int[] arr, int size)
    {
        if (arr == null || size <= 0)
        {
            throw new ArgumentException("Invalid input");
        }

        //list of integer arrays eg: [1,2], [3,4] ,etc.
        List<int[]> result = new();

        for (int i = 0; i < arr.Length; i += size)
        {
            //go one by one, incrementing by size.
            //use take method to grab X integers and add to list via "Toarray"
            //eg: skip 2, get 3 and 4 (2 if possible), conver to array, add to result
            result.Add(arr.Skip(i).Take(size).ToArray());
        }

        return result;
    }

    public static List<int[]> ChunkArray2(int[] arr, int size)
    {
        List<int[]> chunked = new List<int[]>();
        List<int> chunk = new List<int>();
        int count = 0;
        foreach (int i in arr)
        {

            chunk.Add(i);
            if (chunk.Count == size) //array is at chunk size, add
            {
                chunked.Add(chunk.ToArray()); //adding array not list
                chunk.Clear();
            }
            count++;
            if (count == arr.Length) //reached last element
            {
                chunked.Add(chunk.ToArray());
                chunk.Clear();
            }
        }
        return chunked;
    }
}
