using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Customer
    {
        
     
        public int CustomerID { get; set; }
      
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public string Adress { get; set; }
        public int Telephonenumber { get; set; }
        public string Location { get; set; } // of public int locatie { get; set;} hangt ervan af ... int voor coordinaten --> string voor een straatnaam

        [DataType(DataType.Date)]
        public DateTime reservation { get; set; }

        public User user { get; set; }
        public ICollection<Event> Events { get; set; }
      

    }
}
