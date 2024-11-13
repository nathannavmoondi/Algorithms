//given a string, return the character that is most commonly used in the string

//maxchar('aabbccccd') = c
//maxchar('apple 12311111') == 1
using System;
using System.Collections.Generic;
using System.Linq;



public static class MaxChar
{
    public static char IsMaxChar(string str)
    {
        if (string.IsNullOrEmpty(str))
        {
            throw new ArgumentException("Input string is empty");
        }

        Dictionary<char, int> charCount = new Dictionary<char, int>();

        foreach (char c in str)
        {
            //fill up dictionary
            if (charCount.ContainsKey(c))
            {
                charCount[c]++;
            }
            else
            {
                charCount[c] = 1;
            }
        }

        //which is largest value in this dictionary
        char mostCommonChar = charCount.Aggregate((x, y) => x.Value > y.Value ? x : y).Key; //returns keyvalue pair object

        //or
        //var maxValue = charCount.Values.Max();
        //var keyOfMaxValue = dict.MaxBy(entry => entry.Value).Key; // "a"
        //return keyOfMaxValue

        //or use method to iterate

        return mostCommonChar;
    }
}