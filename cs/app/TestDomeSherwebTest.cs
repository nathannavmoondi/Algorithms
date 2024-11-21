using System;
using System.Globalization;

public static class TestDomeSherwebTest
{
    public static double Average(int a, int b)
    {
        //return a + b / 2; 
        return (a + b) / 2.0; //can't do integer division so need to convert one of them to double
    }
    public static List<string> TransformDateFormat(List<string> dates)
    {
        var results = new List<String>();        
        CultureInfo enUS = new CultureInfo("en-US");

        foreach (var dt in dates)
        {
            bool bad = false;
            DateTime result;
            //convert type 1
            
            if (DateTime.TryParseExact(dt, "yyyy/MM/dd", enUS, System.Globalization.DateTimeStyles.None, out result))
            {
                    results.Add(result.ToShortDateString());
                    continue;
            }


            //convert type 2
            if (DateTime.TryParseExact(dt, "MM-dd-yyyy", enUS, System.Globalization.DateTimeStyles.None, out result))
            {
                //var dtime = DateTime.ParseExact(dt, "MM-DD-YYYY", provider);
                results.Add(result.ToShortDateString());
                continue;
            }
            

            //convert type 3 NO CLUE WHAT THIS IS OR IF I SHOULD GET RID OF SPACES AND P
           if (DateTime.TryParseExact(dt, "y yyyp ddp MM", enUS, System.Globalization.DateTimeStyles.AllowWhiteSpaces, out result))
            { 
                //var dtime = DateTime.ParseExact(dt, "Y YYYp DDp MM", provider);
                results.Add(result.ToShortDateString());
                continue;
            }

            if (DateTime.TryParseExact(dt, "yyyymmdd", enUS, System.Globalization.DateTimeStyles.None, out result))
            {
                //var dtime = DateTime.ParseExact(dt, "Y YYYp DDp MM", provider);
                results.Add(result.ToShortDateString());
                continue;
            }

        }
        return results;
    }

    public static void Main2()
    {
        Console.WriteLine(Average(2, 1));
        var input = new List<string> { "2010/02/20", "2 016p 19p 12", "11-18-2012", "2018 12 24", "20130720" };
        //i forget to copy what they were expecting as a result, so not sure which ones are invalid or correct
        var results = TransformDateFormat(input);
        foreach(var r in results)
        {
            Console.WriteLine(r);
        } 
    }
}
