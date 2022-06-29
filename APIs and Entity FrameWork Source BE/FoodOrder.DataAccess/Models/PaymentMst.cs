using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class PaymentMst
    {
        public int Pid { get; set; }
        public string? Email { get; set; }
        public string? Type { get; set; }
        public string? BankName { get; set; }
        public string? CardNo { get; set; }
        public string? Cvv { get; set; }
        public double? Amount { get; set; }
        public string? Upi { get; set; }
        public string? Nameoncard { get; set; }
        public string? Expiry { get; set; }
    }
}
