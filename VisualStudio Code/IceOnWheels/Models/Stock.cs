using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Stock
    {
        [Required]
        public int TypeIjs { get; set; } // dit of string type 
    }
}
