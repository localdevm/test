using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Driver
    {
       
       
        public int DriverID { get; set; }
  
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Adress { get; set; }
        public int Phonenumber { get; set; }
       
        public bool Availibility { get; set; }

        public User user { get; set; }
        public ICollection<Stock> stocks { get; set; }

    }
}
