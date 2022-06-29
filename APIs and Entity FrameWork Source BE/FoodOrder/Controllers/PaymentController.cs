using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class PaymentController : Controller
    {

        //Payments
        [Route("ListPayments")]
        [HttpGet]
        public List<PaymentMst> ListPayments()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.PaymentMsts.ToList();
            }
        }
        [Route("ListSpecificPayment")]
        [HttpGet]
        public List<PaymentMst> ListSpecificPayment(string email)
        {
            using (var dbContext = new FoodSystemContext())
            {
                PaymentMst payment = new PaymentMst();
                return dbContext.PaymentMsts.Where(x => x.Email == email).ToList();
            }
        }
        [Route("InsertPayments")]
        [HttpPost]
        public APIResponse InsertPayment(PaymentMst payment)
        {
            HashingProvider hashingProvider = new HashingProvider();
            if (payment.Upi != null)
            {

                payment.Upi = hashingProvider.GetHashedText((payment.Upi));
            }

            if (payment.CardNo != null && payment.Cvv != null)
            {
                payment.Cvv = hashingProvider.GetHashedText(payment.Cvv);

                payment.CardNo = hashingProvider.GetHashedText(payment.CardNo);
            }

            PaymentProvider PaymentProvider = new PaymentProvider();
            PaymentProvider.Payment(payment);
            return new APIResponse() { status = "success" };
        }
    }
}
