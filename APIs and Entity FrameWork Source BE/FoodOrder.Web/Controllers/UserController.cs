using Microsoft.AspNetCore.Mvc;
using FoodOrder.DataAccess.Providers;
using FoodOrder.DataAccess.Models;
using FoodOrder.Web.Models;
using Microsoft.AspNetCore.Http;

namespace FoodOrder.Web.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        
        [HttpGet]
        public IActionResult Signup()
        {
            UserMst model = new UserMst();
            
            return View(model);

        }
        
        [HttpPost]
        public IActionResult C_OrderPage(UserMst user)
        {
            UserProvider userProvider = new UserProvider();
            userProvider.InsertUser(user.Fname, user.Lname, user.Address, user.City, user.Gender, user.Pincode, user.Email, user.Password);
            return View("C_OrderPage",user);
        }
        [HttpGet]
        public IActionResult LoginView()
        {
            UserMst model = new UserMst();

            return View(model);

        }
        [HttpPost]
        public IActionResult Home(UserMst model)
        {

            UserProvider userProvider = new UserProvider();

            bool rst=userProvider.LoginUser(model.Email, model.Password);
            HttpContext.Session.SetString("Email", model.Email);
            
            if (rst)
            {
                if (model.Email == "admin@gmail.com")
                {
                    return View("OwnerHomepage", model);
                }
                return View("C_OrderPage");
            }

            else
            {
                
                return View("Invalid");
            }
        }
        
        [HttpPost]
        public IActionResult Invalid()
        {
            return View();
        }
        [HttpGet]
        public IActionResult ORDER()
        {
            ProductProvider productProvider = new ProductProvider();
            
            List<ProductMst> products = productProvider.ListProducts();
            OrderViewModel orderViewModel = new OrderViewModel();
            
            orderViewModel.Products = products;

            return View("ORDER", orderViewModel);
        }

        [HttpGet]
        public IActionResult Payment()
        {
            PaymentMst payment = new PaymentMst();
            return View(payment);
        }

        [HttpPost]
        public IActionResult SubmitOrder([FromBody]List<OrderMst> orders)
        {
            
            OrderProvider orderProvider = new OrderProvider();
            foreach (OrderMst order in orders)
            {
                orderProvider.InsertOrder(order.Pname, (float)order.Price, (int)order.Qnt,order.Email);
            }
            return View("Payment",new PaymentMst());
        }

        [HttpGet]
        public IActionResult ListOrder()
        {
            OrderProvider orderProvider = new OrderProvider();
            List<OrderMst> orders = orderProvider.ListOrders();
           


            return View("ListOrder", orders);
        }
        [HttpGet]
        public IActionResult OwnerHomepage()
        {
            
            return View();
        }
        [HttpGet]
        public IActionResult ProductView()
        {
            ProductProvider productProvider = new ProductProvider();
            List<ProductMst> products = productProvider.ListProducts();
            return View("ProductView", products);

        }
        [HttpGet]
        public IActionResult AddProduct()
        {
            ProductMst model = new ProductMst();

            return View(model);

        }
        [HttpPost]
        public IActionResult ProductAddSuccess(ProductMst product)
        {
            ProductProvider productProvider = new ProductProvider();
            productProvider.InsertProduct(product.Pname, (int)product.Status,(float)product.Price);
            return View("ProductAddSuccess", product);
        }
        [HttpPost]
        public IActionResult UpdateSuccess(ProductMst product)
        {
            ProductProvider productProvider = new ProductProvider();
            productProvider.UpdateProduct(product.Pname, (int)product.Status, (float)product.Price);
            return View("UpdateSuccess", product);
        }
        [HttpGet]
        public IActionResult UpdateProduct()
        {
            ProductMst model = new ProductMst();

            return View(model);

        }
        [HttpPost]
        public IActionResult DeleteSuccess(ProductMst product)
        {
            ProductProvider productProvider = new ProductProvider();
            productProvider.DeleteProduct(product.Pname);
            return View("DeleteSuccess", product);
        }
        [HttpGet]
        public IActionResult DeleteProduct()
        {
            ProductMst model = new ProductMst();

            return View(model);

        }

        [HttpGet]
        public IActionResult ListPayment()
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            List<PaymentMst> payment = paymentProvider.ListPayments();
            return View("ListPayment", payment);
        }
        [HttpPost]
        public IActionResult ThankYou(PaymentMst payment)
        {
            PaymentProvider paymentProvider = new PaymentProvider();
            paymentProvider.InsertPayment(payment.BankName, payment.CardNo, payment.Cvv, payment.Email);
            return View("ThankYou",payment);
        }
        
        [HttpGet]
        public IActionResult ContactUs()
        {
            ContactMst model = new ContactMst();

            return View(model);

        }

        [HttpPost]
        public IActionResult ContactThankYou(ContactMst contact)
        {
            ContactProvider contactProvider = new ContactProvider();
            contactProvider.InsertContact(contact.FullName, contact.Email, contact.Message);
            return View("ContactThankYou", contact);
        }

        [HttpGet]
        public IActionResult ListFeedback()
        {
            ContactProvider contactProvider = new ContactProvider();
            List<ContactMst> contact = contactProvider.ListContacts();
            return View("ListFeedback", contact);
        }
        [HttpGet]
        public IActionResult OrderListcus() {
            string email = HttpContext.Session.GetString("Email");
            
            OrderProvider orderProvider = new OrderProvider();
            List<OrderMst> orders = orderProvider.ListOrders(email);
            return View("ListOrder", orders);
        }
        [HttpGet]
        public IActionResult PaymentListcus()
        {
            string email = HttpContext.Session.GetString("Email");
            PaymentProvider paymentProvider = new PaymentProvider();
            List<PaymentMst> payments = paymentProvider.ListPayments(email);
            return View("ListPayment", payments);
        }
        public IActionResult C_OrderPage()
        {
            return View();
        }
    }
}
