//given a integer return an integer that is the reverse

//eg 15 = 51, 981 = 189, -15 = -51, -90 = -9

public static class ReverseInt
{
    public static int ReverseInteger2(int n)
    {
        var abs = Math.Abs(n);

        var str = n.ToString().ToCharArray().Reverse().ToString();

        if (str == null) return 0;
        var num = int.Parse(str);
        if (n < 0) num *= -1;
        return num;
    }
        public static int ReverseInteger(int n)
    {
        //int reversed = 0;
        //while (n != 0)
        //{
        //    int digit = n % 10;
        //    reversed = reversed * 10 + digit;
        //    n /= 10;
        //}

        //or make absolute
        //convert to string
        //conver to char array
        //reverse array
        //convert back to string
        //convert to int
        //check for less than 0 and multiply by -1 if so.
        var input = Math.Abs(n);

        char[] array = input.ToString().ToCharArray();
        Array.Reverse(array); Console.WriteLine(array);
        var str = new String(array);
        var num = int.Parse(str);
        if (n < 0) num *= -1;
        Console.WriteLine($"reversed {n} is {num}");
        return num;
    }
}