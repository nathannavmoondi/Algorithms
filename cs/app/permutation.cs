// A non-empty zero-indexed array A consisting of N integers is given.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// For example, array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation.
// The goal is to check whether array A is a permutation.
// Write a function:
// class Solution { public int solution(int[] A); }
// that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.
// Given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.
using System;
using System.Collections.Generic;
	

public static class Permutation
{
   
        public static bool IsPermutation(int[] A)
        {

            List<int> set = new List<int>();

            foreach (int num in A)
            {
            //check N not greater than size of array and also not contains duplicates
                if (num < 1 || num > A.Length || set.Contains(num))
                {
                    return false;
                }
                set.Add(num);
            }

        return true;
        }
	
}