using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parallex_MFB.Web.Models
{
    public class Result<T>
    {
        public bool IsSuccssful;
        public string Message;
        public T ReturnedObject;
        public string ReturnedCode;           
    }
}
