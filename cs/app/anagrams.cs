//check to see if two strings are anagrams.  one string is an anagram of another if
// if it uses the same characters. Only consider characters, not spaces or punctuaqtion.
// returns true or false if anagrams

// anagrams('rail safety', 'fairy tales') = true
// anagrams('RAIL! SAFETY!', 'fairy tales') = true
// anagrams('Hi there', 'bye there') = false

using System;
using System.Collections.Generic;

public static class Anagrams{


    public static bool AreAnagrams(string str1, string str2)
    {
        //int[] numbers = new int[] { 1, 2, 3, 4, 5 };
        //int[] x = { 1, 2, 3 };
        //int[] numbers2 = { 1, 2, 3, 4 };

        //var numbers3 = new List<int> { 1, 2, 3, 5, 4 };
        //List<int> num4 = new List<int> { 1, 2, 3, 5, 4 };

        //if (numbers.Contains(4))
        //    Console.WriteLine("Array contains 4");

        //first compare same size
        if (str1.Length != str2.Length)
        {
            return false;
        }

        //one map solution. can also build two maps and compare values of each key

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

    //another solution
    public static bool isAnagram(string first, string second)
    {

        var temp = onlyAlpha(second);
        var tempfirst = onlyAlpha(first);
        if (tempfirst.Length != temp.Length)
            return false;
        foreach (var c in tempfirst)
        {
            if (temp.Contains(c))
            {
                var pos = temp.IndexOf(c);
                temp = temp.Substring(0, pos) + temp.Substring(pos + 1);
            }
            else
                return false;
        }

        return true;
    }

    public static string onlyAlpha(string t)
    {
        var result = "";
        foreach (var c in t)
        {
            if (char.IsLetter(c))
            {
                result += c;
            }
        }
        return result.ToUpper();

    }

}
