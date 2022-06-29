using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;

namespace OnlineFoodOrder
{
    public class PaymentCommand
    {
        public void ExecuteCommand(string[] args)
        {
            switch (args[1].ToLower())
            {
                case "list":
                    ListPayments();
                    break;
                case "insert":
                    InsertPayment(args[2], args[3], args[4], args[5], int.Parse(args[6]), float.Parse(args[7]), DateTime.Parse(args[9]));
                    break;
                case "update":
                    UpdatePayment(args[2], args[3], args[4], args[5], int.Parse(args[6]), float.Parse(args[7]), DateTime.Parse(args[9]));
                    break;
                case "delete":
                    DeletePayment(args[2]);
                    break;
            }
        }
        public void ListPayments()
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            List<PaymentMst> payments = paymentProvider.ListPayments();
            foreach (PaymentMst payment in payments)
            {
               
                Console.WriteLine("Email: " + payment.Email);
                Console.WriteLine("Type: " + payment.Type);
                Console.WriteLine("Bank Name: " + payment.BankName);
                Console.WriteLine("Card No: " + payment.CardNo);
                Console.WriteLine("CVV: " + payment.Cvv);
                Console.WriteLine("Amount: " + payment.Amount);

            }
        }
        private void InsertPayment(string email, string type, string bankname, string cardno, int cvv, float amount, DateTime edate)
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            bool insertResult = paymentProvider.InsertPayment(bankname, cardno, cvv, email);
            if (insertResult)
            {
                Console.WriteLine("User Details Added Successfully...");
            }
        }
        private void UpdatePayment(string email, string type, string bankname, string cardno, int cvv, float amount, DateTime edate)
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            bool updateResult = paymentProvider.UpdatePayment(email, type, bankname, cardno, cvv, amount, edate);
            if (updateResult)
            {
                Console.WriteLine("Product Details Updated Successfully...");
            }
        }
        private void DeletePayment(string email)
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            bool deleteResult = paymentProvider.DeletePayment(email);
            if (deleteResult)
            {
                Console.WriteLine("Product Details Deleted Successfully...");
            }
        }
    }
}
