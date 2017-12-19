using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Location
    {
  
     
        public int id { get; set; }
        public string name { get; set; }
        public double lng { get; set; }
        public double Lat{ get; set; }
        public string address { get; set; }
        [DataType(DataType.Date)]
        public DateTime Timestamp { get; set; }
        public string type { get; set; }

    }
}
