using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BaseDemo.Component.Data.Query;
using BaseDemo.DataManage.Service;

namespace BaseDemo.Web.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            using (ReadUnitOfWork) 
            {
                var userService = new UserManageService(ReadUnitOfWork);
                var result = userService.CheckUser("开发", "fanst");
                return View();
            }
        }
    }
}