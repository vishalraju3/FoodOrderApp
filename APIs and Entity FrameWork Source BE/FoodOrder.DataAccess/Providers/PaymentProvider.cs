using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrder.DataAccess.Models;

namespace FoodOrder.DataAccess.Providers
{
    public class PaymentProvider
    {
        public List<PaymentMst> ListPayments()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.PaymentMsts.ToList();
            }
        }
        public List<PaymentMst> ListPayments(string useremail)
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.PaymentMsts.Where(x => x.Email == useremail).ToList();
            }
        }
        
        public bool InsertPayment(string bankname, string cardno, string cvv, string email)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    PaymentMst payment = new PaymentMst();
                    
                    payment.BankName = bankname;
                    payment.CardNo = cardno;
                    payment.Cvv = cvv;
                    payment.Email = email;
                    
                    dbContext.PaymentMsts.Add(payment);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool UpdatePayment(string email, string type, string bankname, string cardno, int cvv, float amount, DateTime edate)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var payment = (from u in dbContext.PaymentMsts
                                where u.Email == email
                                select u).FirstOrDefault();
                    dbContext.PaymentMsts.Update(payment);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool DeletePayment(string email)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var payment = (from p in dbContext.PaymentMsts
                                where p.Email == email
                                select p).FirstOrDefault();
                    dbContext.PaymentMsts.Remove(payment);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool Payment(PaymentMst paymentMst)
        {
            using (var dbContext = new FoodSystemContext())
            {
                dbContext.PaymentMsts.Add(paymentMst);
                dbContext.SaveChanges();
            }
            return true;
        }

    }
}
