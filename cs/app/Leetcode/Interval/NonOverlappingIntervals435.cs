//435. Non-overlapping Intervals

//Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number
//of intervals you need to remove to make the rest of the intervals non-overlapping.435. Non-overlapping Intervals

//Example 1:

//Input: intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
//Output: 1
//Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
//Example 2:

//Input: intervals = [[1, 2], [1, 2], [1, 2]]
//Output: 2
//Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
//Example 3:

//Input: intervals = [[1, 2], [2, 3]]
//Output: 0
//Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

using System;
using System.Collections.Generic;

//leet 5
public static class NonOverlappingIntervals435
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
