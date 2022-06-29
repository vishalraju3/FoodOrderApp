using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;

namespace OnlineFoodOrder
{
    public class UserCommand
    {
        public void ExecuteCommand(string[] args)
        {
            switch (args[1].ToLower())
            {
                case "list":
                    ListUsers();
                    break;
                case "insert":
                    InsertUser(args[2], args[3],args[4], args[5], args[6], args[7], args[8],args[9]);
                    break;
                case "update":
                    UpdateUser(args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
                    break;
                case "delete":
                    DeleteUser(args[2]);
                    break;
            }
        }
        private void ListUsers()
        {
            UserProvider userProvider = new UserProvider();
            List<UserMst> users = userProvider.ListUsers();
            foreach (UserMst user in users)
            {
                Console.WriteLine("FName: " + user.Fname);
                Console.WriteLine("LName: " + user.Lname);
                Console.WriteLine("Mobile: " + user.Mobile);
                Console.WriteLine("Gender: " + user.Gender);
                Console.WriteLine("Address: " + user.Address);
                Console.WriteLine("City: " + user.City);
                Console.WriteLine("Pincode: " + user.Pincode);
                Console.WriteLine("Email: " + user.Email);
                Console.WriteLine("Password: " + user.Password);

            }
        }
        private void InsertUser(string fname, string lname, string gender, string addr, string city, string pincode, string email, string password)
        {
            UserProvider userProvider = new UserProvider();
            bool insertResult = userProvider.InsertUser(fname, lname, gender, addr, city, pincode, email, password);
            if (insertResult)
            {
                Console.WriteLine("User Details Added Successfully...");
            }
        }
        private void UpdateUser(string fname, string lname, string gender, string addr, string city, string pincode, string email, string password)
        {
            UserProvider userProvider = new UserProvider();
            bool updateResult = userProvider.UpdateUser(fname, lname, gender, addr, city, pincode, email, password);
            if (updateResult)
            {
                Console.WriteLine("Product Details Updated Successfully...");
            }
        }
        private void DeleteUser(string fname)
        {
            UserProvider userProvider = new UserProvider();
            bool deleteResult = userProvider.DeleteUser(fname);
            if (deleteResult)
            {
                Console.WriteLine("Product Details Deleted Successfully...");
            }
        }
    }
}
