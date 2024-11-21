using System;
using System.Globalization;



public enum Side { None, Left, Right }

public class ChainLink
{
    public ChainLink Left { get; private set; }
    public ChainLink Right { get; private set; }

    public void Append(ChainLink rightPart)
    {
        if (this.Right != null)
            throw new InvalidOperationException("Link is already connected.");

        this.Right = rightPart;
        this.Left = this;
    }

    public Side LongerSide()
    {
        throw new InvalidOperationException("Waiting to be implemented.");
    }

    public static void Main4(string[] args)
    {
        ChainLink left = new ChainLink();
        ChainLink middle = new ChainLink();
        ChainLink right = new ChainLink();
        left.Append(middle);
        middle.Append(right);
        Console.WriteLine(left.LongerSide());
    }
}


public class ChainLinkAnswer
{
    public  ChainLinkAnswer Left { get; private set; }
    public  ChainLinkAnswer Right { get; private set; }

    public void Append(ChainLinkAnswer rightPart)
    {
        
        //append new chain to right
        this.Right = rightPart;
        rightPart.Left = this;
        //passed in chain, left part is this.
        //this.Left = this;
    }

    public Side LongerSide()
    {
        //handle closed loop

        int leftcount = 0;
        ChainLinkAnswer link = Left;
        while (link != null)
        {
            leftcount++;
            link = link.Left;
            if (link == this)
                return Side.None;
        }
        int rightcount = 0;
        ChainLinkAnswer link2 = Right;
        while (link2 != null)
        {
            rightcount++;
            link2 = link2.Right;
            if (link == this)
                return Side.None;
        }

        if (leftcount == rightcount)
            return Side.None;
        if (leftcount > rightcount)
            return Side.Left;
        return Side.Right;

    }

    public  void Main3()
    {
        ChainLinkAnswer left = new ChainLinkAnswer();
        ChainLinkAnswer middle = new ChainLinkAnswer();
        ChainLinkAnswer right = new ChainLinkAnswer();
        left.Append(middle); //right side of left is middle
        middle.Append(right); //right side of middle link is right.
        //so
        //left -> middle -> right
        var longerside = left.LongerSide();
        Console.WriteLine(left.LongerSide()); //passing in left link, should return right
    }
}

