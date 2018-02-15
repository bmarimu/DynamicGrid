using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http.Headers;

namespace sample_GridStack.Models
{
    public class MyWorkspaceViewModel
    {
        public IEnumerable<Tile> TileCollection { get; set; }
        public string UserID { get; set; }
        public TileData TileResponse { get; set; }
        

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<MyWorkspaceViewModel> GetTileMetadata()
        {
            string employeeId = string.Empty;
            MyWorkspaceViewModel tileCollectionVM = new MyWorkspaceViewModel();
            IEnumerable<Tile> tileList = null;
            //Call DoucumentDB
            tileList = await DocumentDBRepository<Tile>.GetAllItemsAsync();

            employeeId = "bmarimuthu@test.com";
            
            if (!string.IsNullOrEmpty(employeeId))
            {
                //ToDo: 
                if (tileList != null)
                    tileList = tileList.Where(x => x.EmployeeId == employeeId && x.TileDesc == "Bookmark");
            }

            tileCollectionVM.TileCollection = tileList;
            tileCollectionVM.UserID = employeeId;

            return tileCollectionVM;

        }

    }
}
