using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace imageManagement.Controllers
{
    [Produces("application/json")]
    [Route("api/Image")]
    public class ImageController : Controller
    {
        [HttpPost()]
        public async Task<IActionResult> UploadImage()
        {
            try
            {

                if (Request.Form == null)
                    return await Task.FromResult(BadRequest(new { isUpload = false, Error = "User has not uploaded the file." }));
                if (Request.Form.Files.Count == 0)
                    return await Task.FromResult(BadRequest(new { isUpload = false, Error = "User has not uploaded the file." }));

                var file = Request.Form.Files[0];
                // _logger.LogInformation("**********Upload Contract  Request***********");
                var path = System.Environment.CurrentDirectory + "\\images\\";//ServiceUtil.GetBaseUrl(_configuration, Constant.TemplatePath) + companyId;// + "/" + file.FileName;
                                                                              // 

                //if (!Directory.Exists(path))
                //{
                //    Directory.CreateDirectory(path);
                //}
                string newfile = string.Empty;
                string fileName = Guid.NewGuid().ToString();
                if (file.Length > 0)
                {
                    newfile = fileName.ToString() + System.IO.Path.GetExtension(file.FileName);
                    // string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                    string fullPath = Path.Combine(path, newfile);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return Ok(new { status = true, originalName = file.FileName, generatedName = newfile, msg = "Image upload successfull", ImageUrl = "http://localhost:65444/images/" + newfile });

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
