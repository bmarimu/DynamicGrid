//import * as _ from 'underscore';
import { widgets, WidgetsData } from "./Model/MyWorkspaceModel";

export module MyWorkSpaceScript {
    export class MyWorkSpaceController {

        public tileInfo: KnockoutObservableArray<widgets> = ko.observableArray([]);
        public widgets: KnockoutObservableArray<widgets> = ko.observableArray([]);
        public widgetData: KnockoutObservable<WidgetsData> = ko.observable(null);
        public tileData: KnockoutComputedFunctions<string> = null;

        constructor(_widgets: any) {
            let self = this;

            // this.tileData = ko.computed(this.GetTileData)
            //ko.mapping.fromJS(this.mywidgets, _widgets);
            console.log("passed widgets info : " + JSON.stringify(_widgets));
            if (_widgets !== null) {
                //let test_widget = new widgets(1,1, 4, 4);
                _widgets.forEach(r =>
                    self.tileInfo.push(new widgets(r.TileId, r.x, r.y, r.width, r.height, r.TileDesc, r.data,r.ScriptUri, r.StyleUri)));
                // this.mywidgets.push(test_widget);

                console.log("List we have now inside object:" + JSON.stringify(self.tileInfo()))
                console.log("number of widgets : " + self.tileInfo().length);
                //self.ImportsScriptsForTiles();
                self.tileInfo().forEach((item: widgets) => {
                    //self.checkloadjscssfile(item.scriptUri(), "js");
                    //self.checkloadjscssfile(item.styleUri(), "css"); 

                    console.log("Inside updating data for each tile:" + JSON.stringify(item.tileId));
                    self.GetTileData(item.tileId());
                });
            }

        }

        public loadjscssfile = (filename, filetype) => {
            if (filetype == "js")
                this.loadJS(filename);

            if (filetype == "css")
                this.loadCSS(filename);
        }

        public loadCSS = (href) => {
            var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
            $("head").append(cssLink);
        }

        public loadJS = (src) => {
            var jsLink = $("<script type='text/javascript' src='" + src + "'>");
            $("head").append(jsLink);
        }

        checkloadjscssfile = (filename, filetype) => {
            var filesadded = "" //list of files already added
            if (filesadded.indexOf("[" + filename + "]") == -1) {
                this.loadjscssfile(filename, filetype)
                filesadded += "[" + filename + "]" //List of files added in the form "[filename1],[filename2],etc"
            }
            else
                console.log("file already added!")
        }

        public ImportsScriptsForTiles() {
            this.tileInfo().forEach((item: widgets) => {
                this.checkloadjscssfile(item.scriptUri(), "js"); 
                   this.checkloadjscssfile(item.styleUri(), "css"); 
            });

        }

        public setDelay = (i) => {
            setTimeout(function () {
                console.log("Delay:" + i);
                kendo.ui.progress($(".grid-stack-item-content"), false);
            }, 5000);
        }

        public GetTileData = (tileId: string) => {
            kendo.ui.progress($(".grid-stack-item-content"), true);
            setTimeout(function () { kendo.ui.progress($(".grid-stack-item-content"), false); }, 8000);

            //kendo.ui.progress($("#tile-content_" + tileId), true);
            //kendo.ui.progress($(".grid-stack-item-content"), true);

            let self = this;
            let tileDataObj = new WidgetsData(tileId, '', '');
            //tileDataObj.TileId = tileId;
            console.log("Value passed to this fun:" + tileId)
            if (tileId === null || tileId == undefined)
                return;

            let data: any = ko.toJS(tileDataObj);


            // self.setDelay(tileId);
            kendo.ui.progress($("#tile-content_" + tileId), true);
            $.post("/Home/GetTileData/", data)
                .done(function (response) {
                    console.log("TileID:" + tileId);
                    console.log(JSON.stringify(response));
                    const data = JSON.stringify(response);
                    console.log("updated Data for : " + JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId).forEach(
                        x => console.log(x.y, x.x, x.width, x.height, x.title, x.data))));
                    self.tileInfo().filter(x => x.tileId() === tileId).forEach(y => y.data(response));
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
        }

    }


}
