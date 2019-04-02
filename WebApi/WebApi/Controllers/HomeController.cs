using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            /*DatabaseContext db = new DatabaseContext();

            db.Users.Add(new User("Luka", "Ku", "LukaKu"));
            db.Users.Add(new User("Conan", "Edogawa", "EdogawaConan"));
            db.SaveChanges();*/

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
