using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceOnWheels.Models;

namespace IceOnWheels.Data
{
    public class DbInitializer
    {
        public static void Init(OrderContext context)
        {
            context.Database.EnsureCreated();

            if (context.Drivers.Any())
            {
                return;
            }

            context.Drivers.AddRange(
                new Driver{Adress = "Bloemenlaan 12", Availibility = true, ID = 20, Name = "Joske", Phonenumber = 0473586758});
            context.SaveChanges();
        }
    }
}
