using FoodOrder.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrder.DataAccess.Providers
{
    public class ContactProvider
    {
        public List<ContactMst> ListContacts()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.ContactMsts.ToList();
            }
        }
        public bool InsertContact(string Fname, string email, string msg)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    ContactMst contact = new ContactMst();

                    contact.FullName = Fname;
                    contact.Email = email;
                    contact.Message = msg;


                    dbContext.ContactMsts.Add(contact);
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
