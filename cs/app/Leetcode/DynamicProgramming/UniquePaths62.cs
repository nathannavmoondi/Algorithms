//check to see if two strings are anagrams.  one string is an anagram of another if
// if it uses the same characters. Only consider characters, not spaces or punctuaqtion.
// returns true or false if anagrams

// anagrams('rail safety', 'fairy tales') = true
// anagrams('RAIL! SAFETY!', 'fairy tales') = true
// anagrams('Hi there', 'bye there') = false

using System;
using System.Collections.Generic;

//leet 5
public static class UniquePaths62
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
