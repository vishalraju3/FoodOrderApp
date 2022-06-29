using Microsoft.AspNetCore.Mvc;
using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;

namespace FoodOrder.Controllers
{
    public class ReportsController : Controller
    {
        [Route("GetDistinct")]
        [HttpGet]
        public Object GetDistinctDetails()
        {
            Reports reports = new Reports();
            reports.Label = ReportProvider.ListDistinct();
            reports.Count = ReportProvider.ListDistinctCount();
            return reports;

        }

    }
}