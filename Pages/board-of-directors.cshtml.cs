using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;
using Parallex_MFB.Web.Models;
using Microsoft.AspNetCore.Antiforgery;

namespace Parallex_MFB.Web.Pages
{
    public class boardModel : PageModel
    {
        //private readonly IAntiforgery _xsrf;

        //public boardModel(IAntiforgery xsrf)
        //{
        //    _xsrf = xsrf ?? throw new ArgumentNullException(nameof(xsrf));
        //}
        [BindProperty]
        public string position { get; set; }
        public void OnGet()
        {
        }

        public JsonResult OnPostSaveInfo(PosiModel position)
        {
            
            if(position.Position == "The Chairman")
            {
                var info = System.IO.File.ReadAllText(@"~/bod_details/Ezewu.txt");

                return new JsonResult(info);
            }
            return new JsonResult(new Result { IsSuccssful = true });
        }


    }

    public class PosiModel
    {
        public string Position { get; set; }
    }
}
