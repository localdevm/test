using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Customer
    {
        [Required]
        public int ID { get; set; }
        [Required]
        public string Naam { get; set; }
        [Required]
        public string Adres { get; set; }
        public int Telefoonnummer { get; set; }
        public int Locatie { get; set; } // of public string locatie { get; set;} hangt ervan af ... int voor coordinaten --> string voor een straatnaam

        [DataType(DataType.Date)]
        public DateTime Reservering { get; set; }

        public ICollection<User> Users { get; set; }

    }
}
