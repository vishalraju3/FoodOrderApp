using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrder.DataAccess.Models
{
    public class MenuPage
    {
        public int Pid { get; set; }
        public string? Pname { get; set; }
        public double? Price { get; set; }
        public int ImageId { get; set; }
        public byte[]? FoodImage { get; set; }
        public string? ImageName { get; set; }
        public List<ProductMst> Products { get; set; }
        public List<ImageUploadMst> ImageUploadMsts { get; set; }

    }
}
