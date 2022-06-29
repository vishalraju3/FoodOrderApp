using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class ImageUploadMst
    {
        public int ImageId { get; set; }
        public byte[]? FoodImage { get; set; }
        public string? ImageName { get; set; }
    }
}
