using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IceOnWheels.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        [Required]
        public int ID { get; set; }
        [Required]
        public int Type { get; set; } // bv 0 is customer , 1 is driver => kan ook met bool of string 
    }

}
