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

            if (context.Users.Any()){
                return;
            }

            context.Users.AddRange(
                new User
                {
                    Type = 1,
                    ID = 1
                },
                new User
                {
                    Type = 2,
                    ID = 2  
                });

            context.SaveChanges();

            context.Drivers.AddRange(
                new Driver
                {
                    Adress = "Bloemenlaan 12",
                    Availibility = true,
                    ID = 2,
                    Name = "Joske",
                    Phonenumber = 0473586758
                });

            context.SaveChanges();

            context.Customers.AddRange(
                new Customer
                {
                    Adress = "StrontAkker 22",
                    ID = 1,
                    Name = "peter de ijsjeslikker" ,
                    Telephonennumber = 0465870942,
                    reservation = DateTime.Parse("2017-12-03"),
                    Location = "StrontAkker 22"
                });

            context.SaveChanges();

            context.Stocks.AddRange(
                new Stock
                {
                    TypeIjs = "Raketijs"
                });

            context.SaveChanges();

            context.Locations.AddRange(
                new Location
                {
                    LocationID = 1,
                    Timestamp = DateTime.Parse("2017-12-03")
                    
                });

            context.SaveChanges();

            context.Events.AddRange(
                new Event
                {
                    ID = 1,
                    DID = false,
                    Location = "StrontAkker 22",
                    Reservation = DateTime.Parse("2017-12-03")

                });

            context.SaveChanges();
        }
    }
}
