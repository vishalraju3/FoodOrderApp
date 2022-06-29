using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class OrderMst
    {
        public int Oid { get; set; }
        public string? Email { get; set; }
        public string? Pname { get; set; }
        public double? Price { get; set; }
        public int? Qnt { get; set; }
        public double? TotalPrice { get; set; }
        public string? Status { get; set; }
    }
}
