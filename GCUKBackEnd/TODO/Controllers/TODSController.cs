using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using TODO.model;

namespace TODO.Controllers
{
    //[Route("api/[controller]/[action]")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.RoutePrefix("api/TODS")]
    public class TODSController : ApiController
    {
        static List<string> TODS=new List<string>() ;

        // GET: api/TODS
        public List<string> Get()
        {
       
            if (TODS?.Count > 0)
            {
                return TODS.ToList();
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
        public List<string> Post([FromBody]insert value)
        {
            if(value?.value == null||value == null)
            {
                return TODS; 
            }
            TODS.Add(value.value);



            return TODS;
            
        }

        // PUT: api/TODS/5
        //[System.Web.Http.Route("api/TODS/{oldvalue}")]
        public List<string> Put([FromBody] values values)
        {
            if(values != null)
            {
                int index = TODS.IndexOf(values.oldvalue);
                TODS[index] = values.newvalue;
                //var sid = TODS.FirstOrDefault(x => x == values.oldvalue).Replace(values.oldvalue, values.newvalue);         
                return TODS;
            }
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
