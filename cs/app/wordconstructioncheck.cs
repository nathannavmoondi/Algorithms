
/*

Given a list of words, and a set of characters, determine which
words can be constructed with the characters provided,
and return the sum of the lengths of the words which you can construct.

You do not have to keep track of which characters have been used by
previous words, you can re-use the character set to evaluate each word.

Don't modify the Main() function. Put your solution in the Solution function,
and feel free to add other functions if you feel that they will simplify the
overall solution to the problem.

Examples:
   Input: words = ["cat"], chars = "act"       Output: 3
   Input: words = ["hello"], chars = "ehllo"   Output: 5
   Input: words = ["hello"], chars = "ohlel"   Output: 5  <-- The order characters are provided in chars is arbitrary
   Input: words = ["hello"], chars = "ehllox"  Output: 5  <-- Additional letters you don't need in the chars string shouldn't affect the results.
   Input: words = ["hello"], chars = "ehlo"    Output: 0  <-- There is only one 'l' in chars, and, we can't make the word "hello" with one "l".
   Input: words = ["hello", "hello"], chars = "ehllo"  Output: 10 <-- We can make the word hello with the chars provided, and we can reuse chars for each word

Expected Output 1:
   Input: words = ["hello","world","ceridian"], chars = "yrwelldonehone"  Output: 10
   Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
   
Expected Output 2:
   Input: words = ["cat","bt","hat","tree","attach"], chars = "atach" 	Output: 6
   Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
                The word "attach" cannot be made with the provided letters so it is not counted in the output.

*/

using System;
using System.Collections.Generic;
					
public static class Wordconstructioncheck
{
	//scenarios is of type array of (string[], string, int). must be new C# feature.
	//don't like how they're not given descriptive names
	private static readonly (string[], string, int)[] Scenarios = new (string[], string, int)[] {
		(new [] { "hello","world","ceridian" }, "yrwelldonehone", 10),
		(new [] { "cat","bt","hat","tree","attach" }, "atach", 6)
	};
	
	public static void Run()
	{
		for (var i = 0; i < Scenarios.Length; i++)
		{
			var (words, chars, expected) = Scenarios[i];
			Console.WriteLine($"Example {i + 1}: [{"'" + string.Join("', '", words) + "'"}], chars = '{chars}' -> {Solution(words, chars)}  Expected: {expected}" );
		}
	}
	
	private static int Solution(string[] words, string chars)
	{
		var charMap = buildMap(chars); 	
	
			//Console.WriteLine(charMap.ToString());
	
		int totalchars = 0;
		bool passed = true;
		foreach( var word in words)
		{
			passed = true;
			charMap = buildMap(chars); 	
			foreach( char c in word)
			{				
				if (charMap.ContainsKey(c))
					{
						if (charMap[c] > 0) 
						{
							charMap[c]--;
						}
						else
							passed = false;
					}else { 
						passed = false;						
					}
			}
			if (passed) totalchars += word.Length;
		}
			
		return totalchars;
	}
	
	 public static Dictionary<char, int> buildMap(string chars){
		 var obj = new Dictionary<char, int>();
		 foreach(var c in chars)
		 {
			 if (obj.ContainsKey(c)) 
			  obj[c] = obj[c] + 1;
			 else 
			  obj[c] = 1 ;
		 }		 
		
		 return obj;
	}
}
