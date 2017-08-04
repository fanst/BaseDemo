using System.Web.Mvc;
using BaseDemo.Component.Data;
using BaseDemo.Component.Util;
using Microsoft.Practices.Unity;

namespace BaseDemo.Web.Controllers
{
    public class BaseController : Controller
    {
        [Dependency]
        public IMySession DiMySession { get; set; }

        [Dependency]
        public ICache DiCache { get; set; }

        //public CurrentUser CurrentUser { get; set; }

        [Dependency("WriteUnitOfWork")]
        public IUnitOfWork UnitOfWork { get; set; }

        [Dependency("ReadUnitOfWork")]
        public IUnitOfWork ReadUnitOfWork { get; set; }

        //public BaseController()
        //{
        //    CurrentUser = CurrentContext.GetCurrentUser();
        //}
    }
}
