// Write function that returns the # of vowels in a string
// vowels are a e i o u

// eg: vowels('Hi there') = 3
// vowels('Why?') == 0

public static class GetYourVowels
{
    public static int CountVowels(string str)
    {
        int count = 0;
        //or array char[] vowels = ['a','e'];
        HashSet<char> vowels = new HashSet<char> { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };

        foreach (char c in str)
        {
            if (vowels.Contains(c))
            {
                count++;
            }
        }

        return count;
    }
}