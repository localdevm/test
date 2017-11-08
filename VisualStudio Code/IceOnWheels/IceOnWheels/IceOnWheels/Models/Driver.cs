using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class Driver
    {
        [Key]
        [Required]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public string Adress { get; set; }
        public int Phonenumber { get; set; }
        [Required]
        public bool Availibility { get; set; }

        public ICollection<User> Users { get; set; }

    }
}
