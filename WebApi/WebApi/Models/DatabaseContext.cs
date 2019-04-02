using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApi.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext () : base ("name=conn")
        {

        }

        public virtual DbSet<User> Users { get; set; }
    }
}