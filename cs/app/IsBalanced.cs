////You are working on a calculator application where users can input a mathematical expression such as: (3 + 5) * (2 - 4).
////    To correctly evaluate this expression, the application needs to validate the expression and ensure that the parentheses are balanced. 
////    The balanced parentheses are crucial for determining the order of operations and evaluating the expression correctly. 
////    You have used an Al assistant to generate the following static method to check if the parentheses in an expression are balanced:


public static class IsBalanced
{
    public static bool IsBalancedFormula(string parentheses)
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
}