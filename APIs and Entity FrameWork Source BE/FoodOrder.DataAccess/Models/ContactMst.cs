using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class ContactMst
    {
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Message { get; set; } = null!;
    }
}
