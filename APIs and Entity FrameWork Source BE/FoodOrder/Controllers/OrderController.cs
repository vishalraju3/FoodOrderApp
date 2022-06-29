using FoodOrder.DataAccess.Models;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class OrderController : Controller
    {
        //Orders

        [Route("ListOrders")]
        [HttpGet]
        public List<OrderMst> ListOrders()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.OrderMsts.ToList();
            }
        }

        [Route("ListSpecificOrders")]
        [HttpGet]
        public List<OrderMst> ListSpecificOrders(string email)
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.OrderMsts.Where(x => x.Email == email).ToList();
            }
        }
        [Route("DistinctOrders")]
        [HttpGet]
        public List<String> ListDistinct()
        {
            List<String> label = new List<String>();

            label = ((List<OrderMst>)ListOrders()).Select(m=>m.Pname).Distinct().ToList();
            return label;
        }
        [Route("InsertOrders")]
        [HttpPost]
        public APIResponse InsertOrder(OrderMst orderMst)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {

                    dbContext.OrderMsts.Add(orderMst);
                    dbContext.SaveChanges();
                }
                return new APIResponse() { status = "success" };
            }
            catch
            {
                throw;
            }
        }

    }
}
