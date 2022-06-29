using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ProductController : Controller
    {
        
        //Products
        [Route("ListProducts")]
        [HttpGet]

        public List<ProductMst> ListProducts()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.ProductMsts.ToList();
            }
        }
        [Route("InsertProducts")]
        [HttpPost]
        public APIResponse Insert([FromForm] ImageMst fileUpload)
        {
            try
            {
                ProductMst productMst = new ProductMst();
                
                using (var dbContext = new FoodSystemContext())
                {
                    var ms = new MemoryStream();
                    fileUpload.FoodImage.CopyTo(ms);
                    byte[] vs = ms.ToArray();
                    productMst.FoodImage = vs;
                    productMst.ImageName = fileUpload.ImageName;
                    productMst.Pname = fileUpload.Pname;
                    productMst.Price = fileUpload.Price;
                    dbContext.ProductMsts.Add(productMst);
                    dbContext.SaveChanges();
                }
                ProductProvider imageProvider = new ProductProvider();
                imageProvider.InsertImage(productMst);
            }
            catch (Exception)
            {
                throw;
            }
            return new APIResponse() { status = "success" };
        }
        

        [Route("UpdateProducts")]
        [HttpPost]
        public APIResponse UpdateProduct(ProductMst productMst)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var product = (from p in dbContext.ProductMsts
                                   where p.Pname == productMst.Pname
                                   select p).FirstOrDefault();
                    product.Price = productMst.Price;
                    dbContext.ProductMsts.Update(product);
                    dbContext.SaveChanges();
                }

            }
            catch
            {
                throw;
            }
            return new APIResponse() { status = "success" };
        }
        [Route("DeleteProducts")]
        [HttpPost]
        public APIResponse DeleteProduct(ProductMst productMst)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var product = (from p in dbContext.ProductMsts
                                   where p.Pname == productMst.Pname
                                   select p).FirstOrDefault();
                    dbContext.ProductMsts.Remove(product);
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
