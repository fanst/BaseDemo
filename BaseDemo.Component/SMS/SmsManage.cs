using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace BaseDemo.Component.SMS
{
    public static class SmsManage
    {
        private const string SEND_URL = "http://www.mxtong.net.cn:8080/gateway/Services.asmx/DirectSend";
        private const string GET_STOCK_DETAULS = "http://www.mxtong.net.cn:8080/gateway/Services.asmx/DirectGetStockDetails";
        private const string USER_ID = "986263";
        private const string PWD = "123456";
        private static readonly bool SMS_ENABLED = !string.IsNullOrEmpty(ConfigurationManager.AppSettings["SMS_Enable"]) && (ConfigurationManager.AppSettings["SMS_Enable"] == "1" || ConfigurationManager.AppSettings["SMS_Enable"] == "true");
        private static readonly string SMS_DEBUG_ORG = ConfigurationManager.AppSettings["SMS_DEBUG_ORG"];

        public static async Task<JobSendedDescription> SendSmsAsync(SmsMessage message, string postfix = "【校宝】")
        {
            if (!SMS_ENABLED)
            {
                return new JobSendedDescription()
                {
                    RetCode = "Sucess"
                };
            }
            var httpClient = new HttpClient();
            var httpContent = new FormUrlEncodedContent(new Dictionary<string, string>{
            {"UserID", USER_ID},
            {"Account",  FixOrgName(message.OrgName)},
            {"Password", PWD},
            {"Phones",   FixPhoneDelimiter(TrimPhone(message.Phone))},
            {"Content",  message.Content + postfix},
            {"SendTime", ""},
            {"SendType", "1"},
            {"PostFixNumber", ""}
            });
            var response = await httpClient.PostAsync(SEND_URL, httpContent);
            return GetSendResult<JobSendedDescription>(await response.Content.ReadAsStringAsync());
        }

        public static JobSendedDescription SendSms(SmsMessage message, string postfix = "【校宝】")
        {
            if (!SMS_ENABLED)
            {
                return new JobSendedDescription()
                {
                    RetCode = "Sucess"
                };
            }
            var httpClient = WebRequest.Create(SEND_URL) as HttpWebRequest;
            httpClient.Method = "POST";
            httpClient.ContentType = "application/x-www-form-urlencoded";
            using (var rs = httpClient.GetRequestStream())
            {
                var httpContent = string.Format("UserID={0}&Account={1}&Password={2}&Phones={3}&Content={4}&SendTime=&SendType=1&PostFixNumber=", USER_ID, FixOrgName(message.OrgName), PWD, FixPhoneDelimiter(TrimPhone(message.Phone)), message.Content + postfix);
                var byts = Encoding.UTF8.GetBytes(httpContent.ToString());
                rs.Write(byts, 0, byts.Length);
                rs.Close();
            }
            var response = httpClient.GetResponse();
            using (var sr = new StreamReader(response.GetResponseStream()))
            {
                return GetSendResult<JobSendedDescription>(sr.ReadToEnd());
            }
        }

        public static async Task<SMSStock> GetStockDetailsAsync(string orgName)
        {
            if (!SMS_ENABLED)
            {
                return new SMSStock()
                {
                    RetCode = "Sucess"
                };
            }
            var httpClient = new HttpClient();
            var httpContent = new FormUrlEncodedContent(new Dictionary<string, string>{
            {"UserID", USER_ID},
            {"Account",  FixOrgName(orgName)},
            {"Password", PWD} 
            });
            var response = await httpClient.PostAsync(GET_STOCK_DETAULS, httpContent);
            return GetSendResult<SMSStock>(await response.Content.ReadAsStringAsync());
        }

        public static SMSStock GetStockDetails(string orgName)
        {
            if (!SMS_ENABLED)
            {
                return new SMSStock()
                {
                    RetCode = "Sucess"
                };
            }

            var httpClient = WebRequest.Create(GET_STOCK_DETAULS) as HttpWebRequest;
            httpClient.Method = "POST";
            httpClient.ContentType = "application/x-www-form-urlencoded";
            using (var rs = httpClient.GetRequestStream())
            {
                var httpContent = string.Format("UserID={0}&Account={1}&Password={2}", USER_ID, FixOrgName(orgName), PWD);
                var byts = Encoding.UTF8.GetBytes(httpContent.ToString());
                rs.Write(byts, 0, byts.Length);
                rs.Close();
            }
            var response = httpClient.GetResponse();
            using (var sr = new StreamReader(response.GetResponseStream()))
            {
                return GetSendResult<SMSStock>(sr.ReadToEnd());
            }
        }

        private static string TrimPhone(string phone)
        {
            return Regex.Replace(phone, "[\\r\\n\\s]*", string.Empty);
        }

        private static string FixPhoneDelimiter(string phone)
        {
            return Regex.Replace(phone, "[，；,]+", ";");
        }

        private static string FixOrgName(string orgName)
        {
            if (!string.IsNullOrEmpty(SMS_DEBUG_ORG))
            {
                orgName = SMS_DEBUG_ORG;
            }
            if (orgName.Length > 10)
            {
                return orgName.Substring(0, 10);
            }
            return orgName.PadRight(5, '0');
        }

        //private static string EncodeContent(string content)
        //{
        //    content += "【校宝】";
        //    var sb = new StringBuilder();
        //    sb = Encoding.UTF8.GetBytes(content).Aggregate(sb, (s, item) => s.Append(item.ToString("x2")));
        //    return sb.ToString();
        //}

        private static T GetSendResult<T>(string xml)
        {
            var serializer = new XmlSerializer(typeof(T));
            using (var sr = new StringReader(xml))
            {
                return (T)serializer.Deserialize(sr);
            }
        }
    }

    public struct SmsMessage
    {
        public string OrgName;
        public string Phone;
        public string Content;
    }

    [XmlRoot("ROOT", Namespace = "JobSendedDescription")]
    public class JobSendedDescription
    {
        //<?xml version="1.0" encoding="utf-8"?>
        //<ROOT xmlns="JobSendedDescription">
        //<RetCode>Sucess or Faild</RetCode>
        //<Message>string</Message>
        //<JobID>int</JobID>
        //<OKPhoneCounts>int</OKPhoneCounts>
        //<StockReduced>int</StockReduced>
        //<ErrPhones>string</ErrPhones>
        //</ROOT>
        public string RetCode { get; set; }
        public string Message { get; set; }
        public int JobID { get; set; }
        public int OKPhoneCounts { get; set; }
        public int StockReduced { get; set; }
        public string ErrPhones { get; set; }
    }

    [XmlRoot("ROOT", Namespace = "SMSStock")]
    public class SMSStock
    {
        //<?xml version="1.0" encoding="utf-8"?>
        //<ROOT xmlns="SMSStock">
        //<RetCode>Sucess or Faild</RetCode>
        //<Message>string</Message>
        //<StockRemain>int</StockRemain>
        //<Points>int</Points>
        //<SendTotal>int</SendTotal>
        //<CurDaySend>int</CurDaySend>
        //</ROOT>
        public string RetCode { get; set; }
        public string Message { get; set; }
        public int StockRemain { get; set; }
        public int Points { get; set; }
        public int SendTotal { get; set; }
        public int CurDaySend { get; set; }
    }
}
