//https://leetcode.ca/all/252.html
//Given an array of meeting time intervals consisting of start and end times [[s1, e1],[s2, e2],...] (si < ei),
//determine if a person could attend all meetings.

using System;
using System.Collections.Generic;

//leet 5
public static class MeetingRooms252
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
