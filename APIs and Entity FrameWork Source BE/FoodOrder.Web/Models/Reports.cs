using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrder.DataAccess.Models
{
    public class Reports
    {
        public List<String> Label { get; set; } = null!;
        public List<int> Count { get; set; }
    }
}