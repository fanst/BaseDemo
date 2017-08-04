using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BaseDemo.Component.Data;
using BaseDemo.DataManage.Repo;

namespace BaseDemo.DataManage.Service
{
    public class UserManageService
    {

        private UserRepo UserRepo;

        public UserManageService(IUnitOfWork uw) 
        {
            UserRepo = new UserRepo(uw);
        }

        public bool CheckUser(string name, string ename)
        {
            var result = UserRepo.CheckUser(name,ename);
            if (result != null)
            {
                return true;
            }
            else {
                return false;
            }
        }
    }
}