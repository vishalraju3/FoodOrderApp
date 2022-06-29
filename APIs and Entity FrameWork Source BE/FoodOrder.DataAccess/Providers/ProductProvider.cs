using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;

namespace FoodOrder.DataAccess.Providers
{
    public class ProductProvider
    {
        public List<ProductMst> ListProducts()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.ProductMsts.ToList();
            }
        }
        public bool InsertProduct(string pname, int status, float price)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    ProductMst product = new ProductMst();
                    product.Pname = pname;
                    product.Status = status;
                    product.Price = price;
                    dbContext.ProductMsts.Add(product);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public bool UpdateProduct(string pname, int status, float price)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var product = (from p in dbContext.ProductMsts
                                   where p.Pname == pname
                                   select p).FirstOrDefault();
                    product.Price = price;
                    product.Status = status;
                    dbContext.ProductMsts.Update(product);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool DeleteProduct(string pname)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var product = (from p in dbContext.ProductMsts
                                   where p.Pname == pname
                                   select p).FirstOrDefault();
                    dbContext.ProductMsts.Remove(product);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool InsertImage(ProductMst img)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    dbContext.ProductMsts.Add(img);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
    }

}
