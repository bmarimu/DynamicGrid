define(["require", "exports", "./Model/MyWorkspaceModel"], function (require, exports, MyWorkspaceModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyWorkSpaceScript;
    (function (MyWorkSpaceScript) {
        var MyWorkSpaceController = /** @class */ (function () {
            function MyWorkSpaceController(_widgets) {
                var _this = this;
                this.tileInfo = ko.observableArray([]);
                this.widgets = ko.observableArray([]);
                this.widgetData = ko.observable(null);
                this.tileData = null;
                this.loadjscssfile = function (filename, filetype) {
                    if (filetype == "js")
                        _this.loadJS(filename);
                    if (filetype == "css")
                        _this.loadCSS(filename);
                };
                this.loadCSS = function (href) {
                    var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
                    $("head").append(cssLink);
                };
                this.loadJS = function (src) {
                    var jsLink = $("<script type='text/javascript' src='" + src + "'>");
                    $("head").append(jsLink);
                };
                this.checkloadjscssfile = function (filename, filetype) {
                    var filesadded = ""; //list of files already added
                    if (filesadded.indexOf("[" + filename + "]") == -1) {
                        _this.loadjscssfile(filename, filetype);
                        filesadded += "[" + filename + "]"; //List of files added in the form "[filename1],[filename2],etc"
                    }
                    else
                        console.log("file already added!");
                };
                this.setDelay = function (i) {
                    setTimeout(function () {
                        console.log("Delay:" + i);
                        kendo.ui.progress($(".grid-stack-item-content"), false);
                    }, 5000);
                };
                this.GetTileData = function (tileId) {
                    kendo.ui.progress($(".grid-stack-item-content"), true);
                    setTimeout(function () { kendo.ui.progress($(".grid-stack-item-content"), false); }, 8000);
                    //kendo.ui.progress($("#tile-content_" + tileId), true);
                    //kendo.ui.progress($(".grid-stack-item-content"), true);
                    var self = _this;
                    var tileDataObj = new MyWorkspaceModel_1.WidgetsData(tileId, '', '');
                    //tileDataObj.TileId = tileId;
                    console.log("Value passed to this fun:" + tileId);
                    if (tileId === null || tileId == undefined)
                        return;
                    var data = ko.toJS(tileDataObj);
                    // self.setDelay(tileId);
                    kendo.ui.progress($("#tile-content_" + tileId), true);
                    $.post("/Home/GetTileData/", data)
                        .done(function (response) {
                        console.log("TileID:" + tileId);
                        console.log(JSON.stringify(response));
                        var data = JSON.stringify(response);
                        console.log("updated Data for : " + JSON.stringify(self.tileInfo().filter(function (x) { return x.tileId() === tileId; }).forEach(function (x) { return console.log(x.y, x.x, x.width, x.height, x.title, x.data); })));
                        self.tileInfo().filter(function (x) { return x.tileId() === tileId; }).forEach(function (y) { return y.data(response); });
                        kendo.ui.progress($("#tile-content_" + tileId), false);
                        //  kendo.ui.progress($(".grid-stack-item-content"), false);
                        //if (response.Success) {
                        //    console.log("updated Data for : " + self.tileInfo().filter(x => x.tileId === tileId).forEach(
                        //        x => console.log(x.y, x.x, x.width, x.height, x.title, x.data)));
                        //}
                        //else {
                        //    console.log("Loading didn't work try refresh again!!");
                        //}
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        console.log("Loading didn't work try refresh again!!");
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        kendo.ui.progress($("#tile-content_" + tileId), false);
                    });
                    //var some_html = "<div id='zz73jd'>" +
                    //    "<ul><li><a href='https://www.goog.com' target = '_blank' > Google </a></li>" +
                    //    "<li><a href=\"https://www.duquesnelight.com\" target = \"_blank\"> DuquesneLight </a>" +
                    //    "</li> <li> <a href=\"https://dlconnect-dev.dqe.com\"> DLConnect </a>" +
                    //    "</li></ul></div>";
                    //var some_html = "<div id='zz73je'>" +
                    //    "<ul><li><a href='https://www.Yahoo.com' target = '_blank' > Yahoo </a></li>" +
                    //    "<li><a href=\"https://www.duquesnelight.com\" target = \"_blank\"> DuquesneLight </a>" +
                    //    "</li> <li> <a href=\"https://dlconnect-dev.dqe.com\"> DLConnect </a>" +
                    //    "</li></ul></div>";
                    //var some_html = "<div id='zz73jf'>" +
                    //    "<ul><li><a href='https://www.test.com' target = '_blank' > Test </a></li>" +
                    //    "<li><a href=\"https://www.duquesnelight.com\" target = \"_blank\"> DuquesneLight </a>" +
                    //    "</li> <li> <a href=\"https://dlconnect-dev.dqe.com\"> DLConnect </a>" +
                    //    "</li></ul></div>";
                    //this.tileInfo().forEach(x => x.data(some_html));
                    //console.log("updated Data : " + this.tileInfo().forEach(
                    //    x => console.log(x.y(), x.x(), x.width(), x.height(), x.title, x.data())));
                };
                var self = this;
                // this.tileData = ko.computed(this.GetTileData)
                //ko.mapping.fromJS(this.mywidgets, _widgets);
                console.log("passed widgets info : " + JSON.stringify(_widgets));
                if (_widgets !== null) {
                    //let test_widget = new widgets(1,1, 4, 4);
                    _widgets.forEach(function (r) {
                        return self.tileInfo.push(new MyWorkspaceModel_1.widgets(r.TileId, r.x, r.y, r.width, r.height, r.TileDesc, r.data, r.ScriptUri, r.StyleUri));
                    });
                    // this.mywidgets.push(test_widget);
                    console.log("List we have now inside object:" + JSON.stringify(self.tileInfo()));
                    console.log("number of widgets : " + self.tileInfo().length);
                    //self.ImportsScriptsForTiles();
                    self.tileInfo().forEach(function (item) {
                        //self.checkloadjscssfile(item.scriptUri(), "js");
                        //self.checkloadjscssfile(item.styleUri(), "css"); 
                        console.log("Inside updating data for each tile:" + JSON.stringify(item.tileId));
                        self.GetTileData(item.tileId());
                    });
                }
            }
            MyWorkSpaceController.prototype.ImportsScriptsForTiles = function () {
                var _this = this;
                this.tileInfo().forEach(function (item) {
                    _this.checkloadjscssfile(item.scriptUri(), "js");
                    _this.checkloadjscssfile(item.styleUri(), "css");
                });
            };
            return MyWorkSpaceController;
        }());
        MyWorkSpaceScript.MyWorkSpaceController = MyWorkSpaceController;
    })(MyWorkSpaceScript = exports.MyWorkSpaceScript || (exports.MyWorkSpaceScript = {}));
});
//# sourceMappingURL=MyWorkspace.js.map