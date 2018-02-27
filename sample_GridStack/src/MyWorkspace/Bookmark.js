function SaveAndRedirect() {
    var selected_tileId = JSON.parse(localStorage.getItem('currentTileId'));
    var c = $("#tile-content_" + selected_tileId);
  
    $.ajax({
        type: 'POST',
        url: "/Home/GetAPITileData/",
        data: { 'resource': ko.dataFor(c[0]).readUri() },

        beforeSend: function (xhr) {
            $("#loading-progress_" + ko.dataFor(c[0]).tileId()).show();
        },
        complete: function () {
            $("#loading-progress_" + ko.dataFor(c[0]).tileId()).hide();
        },
        success: function (response) {
            if (response.Success) {
                ko.dataFor(c[0]).data(response.Message);
                console.log("successfully updated and return the view...");
            }
            else
                console.log("Failed to get tile data response or its empty..");
        }
    });

}