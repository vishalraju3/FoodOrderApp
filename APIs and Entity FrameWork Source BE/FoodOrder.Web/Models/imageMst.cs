using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class ImageMst
    {
        public string? Pname { get; set; }
        public double? Price { get; set; }
        public int? Status { get; set; }
        public IFormFile FoodImage { get; set; }
        public string? ImageName { get; set; }
    }
}
