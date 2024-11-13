//given a string, returns true if string is palindrome or false if not.

//p are strings that form the same word if it is reversed.
//eg: abba = true, cat = false.


public static class Palindrome
{
    public static bool IsPalindrome(string str)
    {
        int left = 0;
        int right = str.Length - 1;

        while (left < right)
        {
            if (str[left] != str[right])
            {
                return false;
            }
            left++;
            right--;
        }

        //or reverse string method .Reverse();
        //compare return str.SentenceEqual(reversedString)();

        return true;
    }
}