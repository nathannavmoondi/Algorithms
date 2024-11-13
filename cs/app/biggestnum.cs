//Please write a function in c# that takes an array of integers as an argument, 
//and efficiently returns the sum of the two largest elements in the array.
// For example, if the array passed in is [3, 17, 8, -20, 0], the return value should be 25. (17 + 8)

using System;
using System.Linq;


public static class BiggestNum
{
  
    public static int SumOfTwoLargest(int[] arr)
    {
        if (arr == null || arr.Length < 2)
        {
            throw new ArgumentException("Input array must have at least two elements");
        }

        //get largest
        int largest = arr.Max();
        //may be multiples so can't just remove - so use linq with predicate as long as not that value
        arr = arr.Where(x => x != largest).ToArray(); // Remove the largest element
                                                      //with new array find largest. convert ienumerable to array
        int secondLargest = arr.Max();

        return largest + secondLargest;
    }
}