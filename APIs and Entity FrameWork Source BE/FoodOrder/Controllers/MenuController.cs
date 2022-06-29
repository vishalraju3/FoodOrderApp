//using FoodOrder.DataAccess.Models;
//using Microsoft.AspNetCore.Mvc;

//namespace FoodOrder.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class MenuController : Controller
//    {
//        [Route("ListMenu")]
//        [HttpGet]

//        public List<MenuPage> ListMenu(MenuPage menuPage)
//        {
//            ProductMst productMst = new ProductMst();
//            ImageUploadMst imageUploadMst = new ImageUploadMst();
//            menuPage.Pid = productMst.Pid;
//            menuPage.Pname = productMst.Pname;
//            menuPage.Price = productMst.Price;
//            menuPage.ImageId = imageUploadMst.ImageId;
//            menuPage.FoodImage = imageUploadMst.FoodImage;
//            menuPage.ImageName = imageUploadMst.ImageName;
//            return menuPage;

//        }
//    }
//}
