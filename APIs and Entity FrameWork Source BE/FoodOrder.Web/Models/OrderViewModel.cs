using FoodOrder.DataAccess.Models;
namespace FoodOrder.Web.Models
{
    public class OrderViewModel
    {
        public List<ProductMst> Products { get; set; }
        public List<OrderMst> Orderss { get; set; }

        public string Pname { get; set; }
        public string Oid { get; set; }
        public string Email { get; set; }
        public string Price { get; set; }
        public string Qnt { get; set; }


    }
    public class APIResponse
    {
        public string status { get; set; }
        public string Message { get; set; }
    }
    
}
