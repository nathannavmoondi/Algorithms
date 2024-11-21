////You are working on a calculator application where users can input a mathematical expression such as: (3 + 5) * (2 - 4).
////    To correctly evaluate this expression, the application needs to validate the expression and ensure that the parentheses are balanced. 
////    The balanced parentheses are crucial for determining the order of operations and evaluating the expression correctly. 
////    You have used an Al assistant to generate the following static method to check if the parentheses in an expression are balanced:


public static class TestDome
{
    //You are working on a calculator application where users can input a mathematical expression such as: (3+5)* (2-4).
    //To correctly evaluate this expression, the application needs to validate the expression and ensure that the parentheses are balanced.
    //The balanced parentheses are crucial for determining the order of operations and evaluating the expression correctly.
    //Tags C# Al Code Review Data Structures Stack New Public Easy You have used an Al assistant to generate the following static method
    //to check if the parentheses in an expression are balanced:

    public static bool IsBalanced(string parentheses)
    {
        
        Stack<char> stack = new Stack<char>();
        HashSet<char> opening = new HashSet<char> { '(', '[', '{' };
        HashSet<char> closing = new HashSet<char> { ')', ']', '}' };

        Dictionary<char, char> pairs = new Dictionary<char, char>
        {
            { ')', '(' }, //key,value
            { ']', '[' },
            { '}', '{' }
        };

        foreach (char c in parentheses)
        {
            if (opening.Contains(c))
            {
                stack.Push(c);
            }
            else if (closing.Contains(c))
            {
                if (stack.Count == 0 || stack.Peek() != pairs[c])
                {
                    return false;
                }
                stack.Pop();
            }
        }
        return stack.Count == 0;
    }

    //A megastore offers three types of discounts, which are represented as DiscountType enum.
    //Implement the GetDiscountedPrice method which should take the total weight of the shopping cart, the total price,
    //and the discount type.It should return the final discounted price based on the discount schemes as shown in the promotional video below:
    public enum DiscountType
    {
        Standard, //6%
        Seasonal, //12%
        Weight //<10 6% >10 18%
    }

    public static double GetDiscountedPrice(double cartWeight,
                                            double totalPrice,
                                            DiscountType discountType)
    {
        switch (discountType)
        {
            case DiscountType.Standard:
                return totalPrice * 0.94;
            case DiscountType.Seasonal:
                return totalPrice * 0.88;
            case DiscountType.Weight:
                if (cartWeight < 10)
                    return totalPrice * 0.94;
                else
                    return totalPrice * 0.82;
        }
        return totalPrice;
    }

    public static void Main2(string[] args)
    {
        Console.WriteLine(GetDiscountedPrice(12, 100, DiscountType.Weight));
    }
    
}

 