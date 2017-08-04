﻿using System;
using System.Web;

namespace BaseDemo.Component.Util
{
    public class AppCache : ICache
    {
        /// <summary>
        /// 添加cache(默认过期30分钟)
        /// </summary>
        /// <param name="key">键</param>
        /// <param name="value">值</param>
        public void Add<T>(string key, T value)
        {
            Add(key, value, DateTime.Now.AddMinutes(30));
        }

        /// <summary>
        /// 添加cache
        /// </summary>
        /// <param name="key">键</param>
        /// <param name="value">值</param>
        /// <param name="expiredDateTime">过期时间</param>
        public void Add<T>(string key, T value, DateTime expiredDateTime)
        {
            var cache = HttpRuntime.Cache;
            cache.Insert(key, value, null, expiredDateTime, TimeSpan.Zero);
        }

        public T Get<T>(string key)
        {
            var cache = HttpRuntime.Cache;
            return (T)cache.Get(key);
        }

        public T Get<T>(string key, Func<T> acquire)
        {
            throw null;
        }

        public T Get<T>(string key, Func<T> acquire, DateTime expiry)
        {
            throw null;
        }

        /// <summary>
        /// 移除cache
        /// </summary>
        /// <param name="key"></param>
        public void Delete(string key)
        {
            var cache = HttpRuntime.Cache;
            cache.Remove(key);
        }


        /// <summary>
        /// 添加cache(默认过期30分钟)
        /// </summary>
        /// <param name="key">键</param>
        /// <param name="value">值</param>
        public void Set<T>(string key, T value)
        {
            throw null;
        }

        /// <summary>
        /// 添加cache
        /// </summary>
        /// <param name="key">键</param>
        /// <param name="value">值</param>
        /// <param name="expiredDateTime">过期时间</param>
        public void Set<T>(string key, T value, DateTime expiredDateTime)
        {
            throw null;
        }

    }
}
