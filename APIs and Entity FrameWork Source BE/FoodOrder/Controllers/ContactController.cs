using FoodOrder.DataAccess.Models;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ContactController : Controller
    {
        //ContactUs
        [Route("ListContacts")]
        [HttpGet]
        public List<ContactMst> ListContacts()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.ContactMsts.ToList();
            }
        }
        [Route("InsertContacts")]
        [HttpPost]
        public APIResponse InsertContact(ContactMst contactMst)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {

                    dbContext.ContactMsts.Add(contactMst);
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
