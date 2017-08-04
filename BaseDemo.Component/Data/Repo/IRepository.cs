using System.Collections.Generic;
using System.Linq.Expressions;

namespace BaseDemo.Component.Data.Repo
{
    public interface IRepository<T> where T : class
    {
        void Create(T entity);

        long CreateWithIdentity(T entity);

        void Create(IEnumerable<T> entities);

        void Update(T entity);

        void UpdatePart(object entity);

        void UpdatePart(object entity, Expression<bool> condition);

        void Delete(long id);

        void Delete(IEnumerable<long> id);

        T Get(long id);
    }

}
