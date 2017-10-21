using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Event
    {
        [Required]
        public int ID { get; set; }
        [Required]
        public bool DID { get; set; } // snap deze attribuut niet is dat een check of deze event is afgelopen ? 
        [Required]
        public int Locatie { get; set; } // hier weer gezamelijk afspreken welk type kan ook string zijn
        [DataType(DataType.Date)]
        public DateTime Reservering {get;set;}

        public ICollection<Customer> Customers { get; set; }
    }
}
