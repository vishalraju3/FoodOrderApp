using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;

namespace OnlineFoodOrder
{
    public class OrderCommand
    {
        public void ExecuteCommand(string[] args)
        {
            switch (args[1].ToLower())
            {
                case "list":
                    ListOrders();
                    break;
                case "insert":
                    InsertOrder(args[2], float.Parse(args[3]), int.Parse(args[4]),args[5]);
                    break;
                
                case "delete":
                    DeleteOrder(args[2]);
                    break;
            }
        }
        public void ListOrders()
        {
            OrderProvider orderProvider = new OrderProvider();
            List<OrderMst> orders = orderProvider.ListOrders();
            foreach (OrderMst order in orders)
            {
                Console.WriteLine("Email: " + order.Email);
                Console.WriteLine("PName: " + order.Pname);
                Console.WriteLine("Price: " + order.Price);
                Console.WriteLine("Quantity: " + order.Qnt);
                Console.WriteLine("Total Price: " + order.TotalPrice);
                Console.WriteLine("Status: " + order.Status);

            }
        }
        private void InsertOrder( string pname, float price, int qnt,string email)
        {
            OrderProvider orderProvider = new OrderProvider();
            bool insertResult = orderProvider.InsertOrder(pname, price,qnt,email);
            if (insertResult)
            {
                Console.WriteLine("User Details Added Successfully...");
            }
        }
        
        private void DeleteOrder(string email)
        {
            OrderProvider orderProvider = new OrderProvider();
            bool deleteResult = orderProvider.DeleteOrder(email);
            if (deleteResult)
            {
                Console.WriteLine("Product Details Deleted Successfully...");
            }
        }
    }
}
