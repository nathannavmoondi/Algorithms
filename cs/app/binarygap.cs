//a binary gap within a positive integer N is any maximal
// sequence of consecutive zeroes that is surrounded by both ends in the binary
// representation of N.

//for ex: binary 9 has binary rep of 1001 and contains a binary gap of 2.  The number 529
// has gap of 1000010001 and contains two binary gaps: one of length 4 and one of length 3.

//write a function that returns legnth of it's LONGEST binary gap.  The function should
//return 0 if N doesn't contain a binary gap

//ex: N = 1041 should return 5.  Because N has binary rep of 1000001001 and so it's
//longest binary gap is length 5.

using System;



public static class BinaryGap
{
   
   public static int LongestBinaryGap(int N)
    {
        //get binary string
        string binary = Convert.ToString(N, 2);

        int maxGap = 0;
        int currentGap = 0;
    //    bool counting = false;

        foreach (char c in binary)
        {
            if (c == '1')
            {
                    maxGap = Math.Max(maxGap, currentGap); //which is bigger so far current or past gap?
                    currentGap = 0;                
            //    counting = true;
            }
            else //if (counting)
            {
                currentGap++; //saw 0, keep going
            }
        }

        return maxGap;
    }
}