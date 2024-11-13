//reverse a string.  apple = 'elppa'
    public static class StringReversal
    {
    
        public static string ReverseString(string str)
        {
            //convert string to char array                
            char[] charArray = str.ToCharArray();
            //use Array static method to reverse array
            Array.Reverse(charArray);
            //create new string
            return new string(charArray);
        }
    }
