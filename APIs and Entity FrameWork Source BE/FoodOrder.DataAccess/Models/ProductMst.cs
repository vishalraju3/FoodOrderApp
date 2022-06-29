using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class ProductMst
    {
        public int Pid { get; set; }
        public string? Pname { get; set; }
        public double? Price { get; set; }
        public int? Status { get; set; }
        public byte[]? FoodImage { get; set; }
        public string? ImageName { get; set; }
    }
}
