using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BaseDemo.DataManage.Models;
using BaseDemo.Component.Data;
using BaseDemo.Component.Data.Repo;
using BaseDemo.Component.Data.Query;

namespace BaseDemo.DataManage.Repo
{
    public class UserRepo : BaseRepository<User>
    {
        private QueryManage queryManage;
        public UserRepo(IUnitOfWork uw) : base(uw) 
        {
            queryManage = new QueryManage(uw);
        }

        public User CheckUser(string name,string ename) {
            var result = queryManage.GetList<User>("select * from user where name=@name and ename =@ename ", new { name, ename }).FirstOrDefault();
            return result;
        }
    }
}