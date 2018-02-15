using sample_GridStack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace sample_GridStack.Controllers
{
    public class HomeController : Controller
    {
        string employeeId = "bmarimuthu@test.com";

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            MyWorkspaceViewModel tileList = new MyWorkspaceViewModel();
            tileList = await tileList.GetTileMetadata();
            return this.View("About", tileList);
        }
        [HttpPost]
        public string GetTileData(MyWorkspaceTileData model)
        {
            string response = string.Empty;
            switch (model.TileId)
            {
                case "Book1":
                    response = @"<div class='bookmarkLink'>
                            <div class='tile-title'> Bookmarks </div>
                            <ul>
                                    <li><a href='https://www.ask.com' target='_blank'>Ask Jeeves</a></li>
                                    <li><a href='https://www.duquesnelight.com' target='_blank'>DuquesneLight</a></li>
                                    <li><a href='https://dlconnect-dev.dqe.com'>DLConnect</a></li>
                            </ul>
                    </div>";
                    break;
                case "Book2":
                    response = @"<div class='bookmarkLink'>
                            <div class='tile-title'> My Apps </div>
                            <ul>
                                    <li><a href='https://www.HRApps.com' target='_blank'>HR Apps</a></li>
                                    <li><a href='https://www.MyPortals.com' target='_blank'>MyPortals</a></li>
                                  
                            </ul>
                    </div>";
                    break;
                case "Book3":
                    response = @"<div class='bookmarkLink'>
                            <div class='tile-title'> My Resourses</div>
                            <ul>
                                    <li><a href='https://www.MyResourse.com' target='_blank'>Ask Jeeves</a></li>
                                    <li><a href='https://www.duquesnelight.com' target='_blank'>DuquesneLight</a></li>
                                    <li><a href='https://dlconnect-dev.dqe.com'>DLConnect</a></li>
                            </ul>
                    </div>";
                    break;
            }
            return response;
        }

        [HttpPost]
        public async Task<string> GetAPITileData(MyWorkspaceTileData model)
        {
            var tiledata = await model.GetTileData(model.TileId,"bmarimuthu@dqulight.com");
            return tiledata.TileDesc;

        }

    }
}