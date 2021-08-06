using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Parallex_MFB.Web.Pages
{
    public class excomembersModel : PageModel
    {
        public IHostingEnvironment _env { get; }

        public excomembersModel(IHostingEnvironment env)
        {
            this._env = env;
        }


        [BindProperty]
        public string position { get; set; }

        public void OnGet()
        {
        }

        public async Task<JsonResult> OnGetExcoInfo(string name)
        {
            if (string.IsNullOrEmpty(name))
                return new JsonResult(new { isDone = false });

            JsonResult res = null;
            try
            {
                string fileName = _env.WebRootPath + "/bod_details/json/exco/" + name;
                var fileContent = System.IO.File.ReadAllText(fileName);
                res = new JsonResult(new { isDone = true, message = fileContent });
            }
            catch (FileNotFoundException)
            {
                res = new JsonResult(new { isDone = false, message = "Unable to get details" });
            }
            catch (Exception ex)
            {
                res = new JsonResult(new { isDone = false, message = "An error occured\n" + ex.Message });
            }

            return await Task.FromResult(res);
        }


    }
}
