using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using FoodOrder.DataAccess.Models;

namespace FoodOrder.DataAccess.Providers
{
    public class UserProvider
    {
        public List<UserMst> ListUsers()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.UserMsts.ToList();
            }
        }
        
        public bool InsertUser(string fname, string lname, string gender, string addr, string city, string pincode,string email,string password)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    UserMst user = new UserMst();
                    user.Fname = fname;
                    user.Lname = lname;
                    user.Gender = gender;
                    user.Address = addr;
                    user.City = city;
                    user.Pincode = pincode;
                    user.Email = email;
                    user.Password = password;
                    dbContext.UserMsts.Add(user);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public bool UpdateUser(string fname, string lname, string gender, string addr, string city, string pincode, string email, string password)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var user = (from u in dbContext.UserMsts
                                   where u.Fname == fname
                                   select u).FirstOrDefault();
                    dbContext.UserMsts.Update(user);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool DeleteUser(string fname)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var user = (from p in dbContext.UserMsts
                                   where p.Fname == fname
                                   select p).FirstOrDefault();
                    dbContext.UserMsts.Remove(user);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch
            {
                throw;
            }
        }
        public bool LoginUser(string email,string password)
        {
            try
            {
                using(var dbContext = new FoodSystemContext())
                {
                    var user = (from l in dbContext.UserMsts
                                where l.Email == email && l.Password == password
                                select l).FirstOrDefault();
                    if (user == null)
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
            catch
            {
                throw;
            }
        }
        public bool Registration(UserMst userMst)
        {
            using (var dbContext = new FoodSystemContext())
            {
                dbContext.UserMsts.Add(userMst);
                dbContext.SaveChanges();
            }
            return true;
        }

    }
}
