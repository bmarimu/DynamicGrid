using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
namespace sample_GridStack.Models
{
    public class Tile
    {
        [JsonProperty(PropertyName = "TileId")]
        public string TileId { get; set; }
        [JsonProperty(PropertyName = "TileDesc")]
        public string TileDesc { get; set; }
        [JsonProperty(PropertyName = "EmployeeId")]
        public string EmployeeId { get; set; }
        [JsonProperty(PropertyName = "x")]
        public int x { get; set; }
        [JsonProperty(PropertyName = "y")]
        public int y { get; set; }
        [JsonProperty(PropertyName = "width")]
        public int width { get; set; }
        [JsonProperty(PropertyName = "height")]
        public int height { get; set; }
        [JsonProperty(PropertyName = "ReadUri")]
        public string ReadUri { get; set; }
        [JsonProperty(PropertyName = "UpdateUri")]
        public string UpdateUri { get; set; }
        //[JsonProperty(PropertyName = "data")]
        //public TileData data { get; set; }
        [JsonProperty(PropertyName = "StyleUri")]
        public string StyleUri { get; set; }
        [JsonProperty(PropertyName = "ScriptUri")]
        public string ScriptUri { get; set; }
        
    

    }

    public class TileData
    {
        [JsonProperty(PropertyName = "Data")]
        public string data { get; set; }
        [JsonProperty(PropertyName = "TileId")]
        public string TileId { get; set; }
        [JsonProperty(PropertyName = "TileDesc")]
        public string TileDesc { get; set; }
        [JsonProperty(PropertyName = "EmployeeId")]
        public string EmployeeId { get; set; }

    }
    public class ModelResult
    {
        public ModelResult()
        {
            Success = true;
        }

        public bool Success { get; set; }

        public string Message { get; set; }
    }

}