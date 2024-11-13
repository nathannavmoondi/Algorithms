//54.Spiral Matrix
//Given an m x n matrix, return all elements of the matrix in spiral order.

//https://leetcode.com/problems/spiral-matrix/description/

//Example 1:


//Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//Output: [1,2,3,6,9,8,7,4,5]
//Example 2:


//Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
//Output: [1,2,3,4,8,12,11,10,9,5,6,7]

using System;
using System.Collections.Generic;

//leet 5
public static class MatrixZeroes73
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
