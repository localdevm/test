using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceOnWheels.Models;
using Microsoft.EntityFrameworkCore;

namespace IceOnWheels.Data
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options) : base(options)
        {
            
        }

        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Driver>().ToTable("Driver");
            modelBuilder.Entity<Customer>().ToTable("Customer");
            modelBuilder.Entity<Event>().ToTable("Event");
            modelBuilder.Entity<Location>().ToTable("Location");
            modelBuilder.Entity<Stock>().ToTable("Stock");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}
