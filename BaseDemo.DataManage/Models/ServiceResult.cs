namespace BaseDemo.DataManage.Models
{
    public class ServiceResult // : ServiceResult<object>
    {
        public bool Status { get; set; }

        public string Code { get; set; }

        public string Message { get; set; }

        public object Data { get; set; }

        public ServiceResult() : base() { }

        public ServiceResult(bool status, string code, string message)
        {
            this.Status = status;
            this.Code = code;
            this.Message = message;
        }

        public ServiceResult(bool status, string message)
        {
            this.Status = status;
            this.Message = message;
        }
    }
}