using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scratchcsharp
{
    internal class Program
    {
        static void Main(string[] args)
        {
 
            MyDictionary<string, int> myDictionary = new MyDictionary<string, int>();
            myDictionary.Add("a", 1);
            Console.WriteLine(myDictionary.Get("a"));

            Console.WriteLine(Permutation.IsPermutation([4,1,3,2]));
            Console.WriteLine(Permutation.IsPermutation([4,1,3]));	
    
            Console.WriteLine(Anagrams.AreAnagrams("Hi there", "bye there"));
            var arr1 = ArrayChunk.ChunkArray([1, 2, 3, 4], 2);
            var arr2 = ArrayChunk.ChunkArray2([1, 2, 3, 4, 5], 2);
            Console.WriteLine(arr2.Count());

            Console.WriteLine(BiggestNum.SumOfTwoLargest([3, 17, 8, -20, 0])); //25
            Console.WriteLine(BinaryGap.LongestBinaryGap(9)); //2
            Console.WriteLine(ConsecutiveChars.LimitConsecutiveCharacters("aaaabbbacccbbbdv", 2)); //aabbaccbbdv
            Console.WriteLine(CountDiv.CountDivisibleNumbers(6, 11, 2)); // 3
            FizzBuzz.IsFizzBuzz(15);
            Console.WriteLine(GetYourVowels.CountVowels("Hi there")); //3
            Console.WriteLine(MaxChar.IsMaxChar("aabbccccd")); //c
            Console.WriteLine(MissingInteger.FindMinimalPositiveInteger([0,3,6,4,1,2])); //5
            Console.WriteLine(ReverseInt.ReverseInteger(-15)); //-51
            Console.WriteLine(SentenceCapitalization.CapitalizeFirstLetter("a short sentence")); //A Short Sentence
            Console.WriteLine(StringReversal.ReverseString("apple")); //'elppa'

            Console.WriteLine("Word construction check begin");
            Wordconstructioncheck.Run();
            Console.WriteLine("Word construction check end");

            var ret = IsBalanced.IsBalancedFormula("(3+5)*(2-4)");
            Console.WriteLine($"Balanced = {ret}");

        }
    }
}
