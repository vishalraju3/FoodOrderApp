using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;

namespace OnlineFoodOrder
{
    internal class ProductCommand
    {
        public void ExecuteCommand(string[] args)
        {
            switch (args[1].ToLower())
            {
                case "list":
                    ListProducts();
                    break;
                case "insert":
                    InsertProducts(args[2],int.Parse(args[7]), float.Parse(args[4]));
                    break;
                case "update":
                    UpdateProducts(args[2], int.Parse(args[7]), float.Parse(args[4]));
                    break;
                case "delete":
                    DeleteProducts(args[2]);
                    break;
            }
        }
        public void ListProducts()
        {
            ProductProvider productProvider = new ProductProvider();
            List<ProductMst> products = productProvider.ListProducts();
            foreach(ProductMst product in products)
            {
                Console.WriteLine("PID: "+product.Pid);
                Console.WriteLine("PName: " + product.Pname);
                Console.WriteLine("Price: " + product.Price);
                Console.WriteLine("Status: " + product.Status);

            }
        }
        
        public void InsertProducts(string pname, int status,float price)
        {
            ProductProvider productProvider = new ProductProvider();
            bool insertResult = productProvider.InsertProduct(pname, status,price);
            if(insertResult)
            {
                Console.WriteLine("Product Details Added Successfully...");
            }
        }
        public void UpdateProducts(string pname, int status, float price)
        {
            ProductProvider productProvider = new ProductProvider();
            bool updateResult = productProvider.UpdateProduct(pname, status,price);
            if (updateResult)
            {
                Console.WriteLine("Product Details Updated Successfully...");
            }
        }
        public void DeleteProducts(string pname)
        {
            ProductProvider productProvider = new ProductProvider();
            bool deleteResult = productProvider.DeleteProduct(pname);
            if (deleteResult)
            {
                Console.WriteLine("Product Details Deleted Successfully...");
            }
        }
    }
}