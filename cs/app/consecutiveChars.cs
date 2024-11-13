// Write a function that take a string, s, and an integer, i. Return a string where no character appears more than i times consecutively.
// ex "aaaabbbacccbbbdv", 2 => "aabbaccbbdv"
// "avcd", 1 => "avcd"
// "aaabbbbbaaa", 4 => "aaabbbbaaa"

public static class ConsecutiveChars
{
    public static string LimitConsecutiveCharacters(string s, int i)
    {
        if (i < 1)
        {
            throw new ArgumentException("Integer i must be greater than or equal to 1");
        }

        if (string.IsNullOrEmpty(s))
        {
            return s;
        }

        char prevChar = s[0]; //start with first char
        int count = 1;
        string result = prevChar.ToString();

        for (int j = 1; j < s.Length; j++)
        {
            if (s[j] == prevChar)
            {
                count++; //last char is same!
                if (count <= i) //less than i (shoudl give proper name)
                {
                    result += s[j];
                } //otherwise don't add
            }
            else
            {
                prevChar = s[j];
                count = 1;
                result += s[j]; //start with new character sequence. add this char.
            }
        }

        return result;
    }
}