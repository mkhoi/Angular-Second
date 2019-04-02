using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        private static List<User> Users { get; set; }
        static UsersController()
        {
        }

        [Route("")]
        [HttpGet]
        public IList<User> GetUsers()
        {
            DatabaseContext db = new DatabaseContext();
            Users = db.Users.ToList();
            return Users;
        }

        [HttpPost]
        [Route("")]
        public User CreateUser(User user)
        {
            DatabaseContext db = new DatabaseContext();
            db.Users.Add(user);
            db.SaveChanges();
            return user;
        }

        [HttpPut]
        [Route("{userId}")]
        public void UpdateUser(int userId, User user)
        {
            DatabaseContext db = new DatabaseContext();
            User currentUser = db.Users.FirstOrDefault(temp => temp.Id == userId);
            currentUser.FirstName = user.FirstName;
            currentUser.LastName = user.LastName;
            currentUser.UserName = user.UserName;
            db.SaveChanges();
        }

        [HttpDelete]
        [Route("{userId}")]
        public User DeleteUser(int userId)
        {
            DatabaseContext db = new DatabaseContext();
            User selectedUser = db.Users.FirstOrDefault(temp => temp.Id == userId);
            db.Users.Remove(selectedUser);
            db.SaveChanges();
            return selectedUser;
        }
    }
}
