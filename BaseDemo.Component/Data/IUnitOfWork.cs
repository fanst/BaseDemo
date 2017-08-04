using System;
using System.Data;

namespace BaseDemo.Component.Data
{
    public interface IUnitOfWork : IDisposable
    {
        IDbConnection Connection { get; }

        void BeginTran();

        void Commit();

        void Rollback();

        IDbTransaction GetLastTransaction();
    }
}
