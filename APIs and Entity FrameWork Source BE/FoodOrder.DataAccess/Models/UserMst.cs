using System;
using System.Collections.Generic;

namespace FoodOrder.DataAccess.Models
{
    public partial class UserMst
    {
        public int Uid { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Mobile { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? Pincode { get; set; }
        public string Email { get; set; } = null!;
        public string? Password { get; set; }
    }
}
