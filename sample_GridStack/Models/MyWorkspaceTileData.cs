using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Net;
using Newtonsoft.Json.Serialization;

namespace sample_GridStack.Models
{
    public class MyWorkspaceTileData
    {
 
        public string Data { get; set; }

    
        [Required]
        public string TileId { get; set; }

 
        public string TileDesc { get; set; }


        public string EmployeeId { get; set; }

        public async Task<TResult> GetAsync<TResult>(string uriString) where TResult : class
        {
            var uri = new Uri(uriString);
            using (var client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(uri);
                if (response.StatusCode != HttpStatusCode.OK)
                {
                    //Log.Error(response.ReasonPhrase);
                    return default(TResult);
                }
                var json = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<TResult>(json, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            }
        }

        public async Task<TileData> GetTileData(string tileId, string EmployeeId)
        {
            TileData tileData = new TileData();
            try
            {
                var resource = "/V1/Tiles/Bookmarks/Users/bmarimuthu@duqlight.com/";
                var endpoint = "https://shared-alpha-dev-api-mgmt.azure-api.net";
                var headerKey = "Ocp-Apim-Subscription-Key";
                var headerVal = "d002f0985c3242dbbd1fe73eb97aff3e";

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(endpoint);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("text/html"));
                    client.DefaultRequestHeaders.Add(headerKey, headerVal);

                    string tileDetails = "";
                    
                    HttpResponseMessage response = await client.GetAsync(resource);
                    if (response.IsSuccessStatusCode)
                    {
                        using (HttpContent content = response.Content)
                        {
                            Task<string> result = content.ReadAsStringAsync();
                            tileDetails = result.Result;

                            if (tileDetails != null)
                            {
                                tileData.TileId = tileId;
                                tileData.TileDesc = tileDetails;
                            }
                        }
                    }
                }

            }
            catch (Exception ex)
            {

            }

            return tileData;
            
        }
    }
}