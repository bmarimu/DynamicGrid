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
using System.IO;

namespace sample_GridStack.Models
{
    public class MyWorkspaceTileData
    {
        public string Data { get; set; }

        public string TileId { get; set; }

        public string TileDesc { get; set; }

        public string EmployeeId { get; set; }

        public string GetTileDataUri { get; set; }

        public string GetTileScriptUri { get; set; }

        public string GetTileStyleUri { get; set; }

        public string endpoint = "https://shared-alpha-dev-api-mgmt.azure-api.net";

        public string headerKey = "Ocp-Apim-Subscription-Key";

        public string headerVal = "d002f0985c3242dbbd1fe73eb97aff3e";

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

        public async Task<Byte[]> GetTileScript(string resource)
        {
            Byte[] script = null;
            try
            {
               // var resource = $"/V1/Tiles/Bookmarks/Users/{EmployeeId}/Tiles/{tileId}";
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
                            script = content.ReadAsByteArrayAsync().Result;
                           
                        }
                    }
                }
                
            }
            catch(Exception ex)
            {

            }
            return script;
        }

        public async Task<string> GetTileData(string resource)
        {
            string tileDetails = string.Empty;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(endpoint);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("text/html"));
                client.DefaultRequestHeaders.Add(headerKey, headerVal);


                HttpResponseMessage response = await client.GetAsync(resource);
                if (response.IsSuccessStatusCode)
                    using (HttpContent content = response.Content)
                        tileDetails = content.ReadAsStringAsync().Result;
            }
            return tileDetails;

        }

        public string GetEditTileData(string resource)
        {
            string tileDetails = string.Empty;
            tileDetails = @"<div class='bookmarkLink'>
                            <div class='tile-title'>Edit Bookmark Links</div>
                           <div class='form-group'>
                              <label for='title'>LinkTitle</label>
                              <input type='text' class='form-control' id='title'>
                            </div>
                            <div class='form-group'>
                              <label for='link'>Link</label>
                              <input type='text' class='form-control' id='link'>
                            </div>
                            <div class='btn-section'><button id='save-btn' type='button' class='btn btn-default' onclick='SaveAndRedirect()'>Save</button>
                            <button type='button' class='btn btn-default'>Cancel</button></div>
                    </div>";
            return tileDetails;

        }
    }
}