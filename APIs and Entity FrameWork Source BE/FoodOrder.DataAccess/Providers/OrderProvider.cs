using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;

namespace FoodOrder.DataAccess.Providers
{
    public class OrderProvider
    {
        public List<OrderMst> ListOrders(string useremail)
        {

            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.OrderMsts.Where (x=>x.Email==useremail).ToList();
            }
        }
        public List<OrderMst> ListOrders()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.OrderMsts.ToList();
            }
        }
        public bool InsertOrder(string pname,float price,int qnt,string email)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    OrderMst order = new OrderMst();
                    
                    order.Pname = pname;
                    order.Price = price;
                    order.Qnt = qnt;
                    order.Email = email;
                    
                    
                    dbContext.OrderMsts.Add(order);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        
        public bool DeleteOrder(string pname)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var order = (from p in dbContext.OrderMsts
                                where p.Pname == pname
                                select p).FirstOrDefault();
                    dbContext.OrderMsts.Remove(order);
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
