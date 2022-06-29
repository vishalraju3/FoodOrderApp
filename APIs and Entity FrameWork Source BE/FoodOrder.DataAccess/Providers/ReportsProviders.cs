using FoodOrder.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Providers;
public class ReportProvider
{
    public static List<OrderMst> ListOrders()
    {
        using (var dbContext = new FoodSystemContext())
        {
            return dbContext.OrderMsts.ToList();
        }
    }
    public static List<String> ListDistinct()
    {
        List<String> label = new List<String>();
        label = ((List<OrderMst>)ListOrders()).Select(m => m.Pname).Distinct().ToList();
        return label;
    }

    public static List<int> ListDistinctCount()
    {
        List<int> c = new List<int>();
        c = new FoodSystemContext().OrderMsts.GroupBy(x => x.Pname).Select(m => m.Count()).ToList();
        return c;
    }
    ReportProvider rp = new ReportProvider();

}