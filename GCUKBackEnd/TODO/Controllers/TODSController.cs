using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace TODO.Controllers
{
    //[Route("api/[controller]/[action]")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TODSController : ApiController
    {
        static List<string> TODS=new List<string>() ;

        // GET: api/TODS
        public List<string> Get()
        {
       
            if (TODS?.Count > 0)
            {
                return TODS;
            }
            return null;
        }

        // GET: api/TODS/5
        public string Get(string id)
        {
            var result = TODS.FirstOrDefault(x=>x ==id );
            return result.ToString();
        }

        // POST: api/TODS
        public List<string> Post([FromBody]string value)
        {

            TODS.Add(value);



            return TODS;
            
        }

        // PUT: api/TODS/5
        public List<string> Put(string id, [FromBody]string value)
        {
            var sid = TODS.FirstOrDefault(x => x == id).Replace(id,value);         
            return TODS;
        }

        // DELETE: api/TODS/5
        public List<string> Delete(string id)
        {
            var itemToRemove = TODS.FirstOrDefault(x=>x== id);
            TODS.Remove(itemToRemove);  
            return TODS; 
        }
        
    }
   
}
