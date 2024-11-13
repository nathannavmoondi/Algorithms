// Write a funcion that capitalizes the first letter of each word then returns
// that string

// eg: a short sentence = A Short Sentence
using System.Globalization;



public static class SentenceCapitalization
{
    public static string CapitalizeFirstLetter(string input)
    {
        //TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
        //return textInfo.ToTitleCase(str);

    
        //or split into multiple words
        //add them together with a ' ' and then capitalize the first letter

        var output = input.Substring(0, 1).ToUpper();

        for (int i = 1; i < input.Length; i++)
        {
            if (input[i - 1] == ' ')
                output += input.Substring(i, 1).ToUpper();
            else
                output += input.Substring(i, 1);
        }
        return output;
    }
}