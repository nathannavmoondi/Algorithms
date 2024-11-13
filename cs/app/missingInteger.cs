// I need to "Find the minimal positive integer not occurring in a given sequence. "
//   A[0] = 1    
//   A[1] = 3    
//   A[2] = 6
//   A[3] = 4    
//   A[4] = 1    
//   A[5] = 2, the function should return 5.

// Assume that:

//         N is an integer within the range [1..100,000];
//         each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
using System;
using System.Collections.Generic;



public static class MissingInteger
{
    public static int FindMinimalPositiveInteger(int[] A)
    {
        List<int> set = new List<int>(); //or hashset which is faster

        //add to hashset. unique values.
        foreach (int num in A)
        {
            set.Add(num);
        }

        int result = 1;
        while (set.Contains(result))
        {
            //starting from 1, if contgains next number - keep incrementing.  Otherwise return.
            result++;
        }

        return result;
    }
}