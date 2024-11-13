//https://leetcode.com/problems/linked-list-cycle/description/


//Code

//Given head, the head of a linked list, determine if the linked list has a cycle in it.

//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

//Return true if there is a cycle in the linked list. Otherwise, return false.

using System;
using System.Collections.Generic;

//leet 5
public static class ClimingStairs70
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
