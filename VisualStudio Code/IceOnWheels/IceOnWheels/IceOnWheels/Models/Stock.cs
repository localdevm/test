using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Stock
    {
  
     
        public int StockID { get; set; }
        
        public string TypeIjs { get; set; } // dit of int type 
       
        public int Quantity { get; set; }
       
        public string supplementen { get; set; }

    }
}
