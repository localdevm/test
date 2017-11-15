using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceOnWheels.Models;
using Microsoft.EntityFrameworkCore;

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
                    UserID = 2,
                    Type = 1

                },
                new User
                {
                    UserID= 3,
                    Type = 2
                  
                });
               
            context.SaveChanges();

            if (context.Drivers.Any())
            {
                return;
            }

            context.Drivers.AddRange(
                new Driver
                {
                    Adress = "Bloemenlaan 12",
                    Availibility = true,
                    DriverID = 2,
                    Name = "Joske",
                    Phonenumber = 0473586758
                });

            context.SaveChanges();

            
            context.Customers.AddRange(
                new Customer
                {
                    Adress = "StrontAkker 22",
                    CustomerID = 1,
                    FirstName = "peter" ,
                    LastName = "de ijsjeslikker",
                    Telephonenumber = 0465870942,
                    reservation = DateTime.Parse("2017-12-03"),
                    Location = "StrontAkker 22"
                });

            context.SaveChanges();

           

            context.Stocks.AddRange(
                new Stock
                {
                    StockID = 1,
                    Quantity = 40,
                    supplementen = "Slagroom",
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
                    EventID = 1,
                    DID = false,
                    Location = "StrontAkker 22",
                    Reservation = DateTime.Parse("2017-12-03")

                });

            context.SaveChanges();
        }
    }
}
