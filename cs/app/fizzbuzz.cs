// write a program that logs the numbers 1 to n. For multiples of 3 print 'fizz'
// instead of the number. for multipels of 5 print buzz.  for #'s multiples 3 and 5 print
// fizz buzz

//1
//2
//Fizz
//4
//Buzz
//Fizz
//7
//8
//Fizz
//Buzz
//11
//Fizz
//13
//14
//FizzBuzz
using System;



public static class FizzBuzz
{
    public static void IsFizzBuzz(int n)
    {
        //iterate
        Console.WriteLine("Starting FizzBuzz");
        Console.WriteLine("------------");

        for (int i = 1; i <= n; i++)
        {
            //match checks
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine("Fizz");
            }
            else if (i % 5 == 0)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
        Console.WriteLine("------------");
    }
}