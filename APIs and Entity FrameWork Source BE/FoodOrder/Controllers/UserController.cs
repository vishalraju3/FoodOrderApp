using FoodOrder.DataAccess.Models;
using FoodOrder.DataAccess.Providers;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FoodOrder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class UserController : ControllerBase
    {
        IConfiguration _config;
        public UserController(IConfiguration configuration)
        {
            _config = configuration;
        }

        [Route("List")]
        [HttpGet]

        public List<UserMst> ListUsers()
        {
            using (var dbContext = new FoodSystemContext())
            {
                return dbContext.UserMsts.ToList();
            }
        }
        [Route("Insert")]
        [HttpPost]
        public APIResponse Insert(UserMst userMst)
        {
                 HashingProvider hashingProvider = new HashingProvider();

            userMst.Password = hashingProvider.GetHashedText(userMst.Password);

            UserProvider userProvider = new UserProvider();
            userProvider.Registration(userMst);
            return new APIResponse() { status = "success" };
        }
    
        [AllowAnonymous]
        [Route("Login")]
        [HttpPost]
        public IActionResult Login(UserMst userMst)
        {
            try
            {

                UserMst userMst1 = Authenticate(userMst);
                //string token = GenerateToken(userMst1);
                return Ok("success");
            }
            catch
            {
                return NotFound("User not found");
            }
        }


        private UserMst Authenticate(UserMst userMst)
        {
            
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    HashingProvider hashingProvider1 = new HashingProvider();
                userMst.Password=hashingProvider1.GetHashedText(userMst.Password);
                    var user = (from l in dbContext.UserMsts
                                where l.Email == userMst.Email && l.Password == userMst.Password
                                select l).FirstOrDefault();
                    if (user == null)
                    {
                        throw new Exception("User not Found");
                    }
                    return user;


                }
            }
            catch
            {
                throw;
            }


        }

        private string GenerateToken(UserMst userMst)
        {
            var secKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credential = new SigningCredentials(secKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                    new Claim(ClaimTypes.Name,userMst.Fname+ "" + userMst.Lname),
                    new Claim(ClaimTypes.Email,userMst.Email)


                };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims, null, DateTime.Now.AddMinutes(15), credential);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [Route("Forgot")]
        [HttpPost]

        public APIResponse Forgot(UserMst userMst)
        {
            try
            {
                using (var dbContext = new FoodSystemContext())
                {
                    var user = (from l in dbContext.UserMsts
                                where l.Email == userMst.Email
                                select l).FirstOrDefault();

                    if (user == null)
                    {
                        return new APIResponse() { status = "fail", Message = "No user match" };
                    }
                    else
                    {
                        return new APIResponse() { status = "success", Message = "user match" };

                    }
                }
            }
            catch
            {
                throw;
            }
        }

        [Route("updatepsw")]
        [HttpPost]

        public APIResponse Updatepsw(UserMst userMst)
        {
            try
            {

                using (var dbContext = new FoodSystemContext())
                {
                    HashingProvider hashingProvider1 = new HashingProvider();
                    userMst.Password = hashingProvider1.GetHashedText(userMst.Password);
                    var user = (from u in dbContext.UserMsts
                                where u.Email == userMst.Email
                                select u).FirstOrDefault();

                    user.Password = userMst.Password;


                    dbContext.SaveChanges();
                }
                return new APIResponse() { status = "success", Message = "user updated" };
            }
            catch
            {
                throw;
            }
        }


    }

    
}
