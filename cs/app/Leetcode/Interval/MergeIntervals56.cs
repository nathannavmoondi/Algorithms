//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
//and return an array of the non-overlapping intervals that cover all the intervals in the input.

//Example 1:

//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
//Example 2:

//Input: intervals = [[1,4],[4,5]]
//Output: [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

//Example 1:

//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
//Example 2:

//Input: intervals = [[1,4],[4,5]]
//Output: [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

using System;
using System.Collections.Generic;

//leet 5
public static class MergeIntervals56
{


    public static bool test(string str1, string str2)
    {
        //first compare same size
        if (str1.Length != str2.Length)
        {
            return false;
        }

        //dictionary of each letter and how many times it appears
        Dictionary<char, int> charCount = new Dictionary<char, int>();

        //add to dict 1 by 1
        foreach (char c in str1)
        {
            if (char.IsLetter(c)) //only letters
            {
                if (charCount.ContainsKey(c))
                {
                    charCount[c]++;
                }
                else
                {
                    charCount[c] = 1;
                }
            }
        }

        //work on other string, reducing char count each time encountered
        foreach (char c in str2)
        {
            if (char.IsLetter(c))
            {
                if (charCount.ContainsKey(c))
                {
                    charCount[c]--;
                    if (charCount[c] == 0)
                    {
                        charCount.Remove(c);
                    }
                }
                else
                {
                    return false;
                }
            }
        }

        //if all chars removed from other string, both are anagrams
        return charCount.Count == 0;
    }

}
