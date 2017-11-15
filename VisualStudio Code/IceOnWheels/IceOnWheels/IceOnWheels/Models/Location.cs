using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Location
    {
  
     
        public int LocationID { get; set; }
        
        public double Longtitude { get; set; }
        public double Latitude { get; set; }
        public string StraatNaam { get; set; }
        [DataType(DataType.Date)]
        public DateTime Timestamp { get; set; }

    }
}
