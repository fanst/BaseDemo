using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace BaseDemo.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            //移除冗余Response Header信息 http://www.cnblogs.com/buyixiaohan/p/5923226.html
            MvcHandler.DisableMvcResponseHeader = true;

            Bootstrapper.Instance.Initialise();
        }
    }
}
