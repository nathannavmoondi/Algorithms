// We have a range of #'s starting at A to B.
// K is an integer that can be evenly divided into a number
// contained in A and B. 

// The solutionis to return the number of times K can go into a number.

// A <= i <= B
// example: given three numbers: (6, 11, 2) your function should return 3.
// because there are 3 numbers divisible by 2 within the range.
// ie: 6, 8, 10.

// values are 6, 7, 8, 9, 10, 11.

public static class CountDiv
{
    public static int CountDivisibleNumbers(int A, int B, int K)
    {
        int count = 0;

        //iterate from a to b
        for (int i = A; i <= B; i++)
        {
            //divisible?
            if (i % K == 0)
            {
                count++;
            }
        }

        return count;
    }
}