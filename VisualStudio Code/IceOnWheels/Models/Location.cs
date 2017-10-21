using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Location
    {
        [Required]
        public int LocationID { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public DateTime Timestamp { get; set; }
    }
}
