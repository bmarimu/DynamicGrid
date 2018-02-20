//import * as _ from 'underscore';
import { widgets, WidgetsData } from "./Model/MyWorkspaceModel";
import * as _ from 'lodash';
export module MyWorkSpaceScript {
    export class MyWorkSpaceController {

        public tileInfo: KnockoutObservableArray<widgets> = ko.observableArray([]);
        public widgets: KnockoutObservableArray<widgets> = ko.observableArray([]);
        public widgetData: KnockoutObservable<WidgetsData> = ko.observable(null);
        public tileData: KnockoutComputedFunctions<string> = null;
        public thing = ko.observable('');

        public Stylefilesadded:string;
        public Scriptfilesadded:string;
        constructor(_widgets: any) {
            let self = this;
            
            this.Stylefilesadded = "";
            this.Scriptfilesadded = "";
            // this.tileData = ko.computed(this.GetTileData)
            //ko.mapping.fromJS(this.mywidgets, _widgets);
            // console.log("passed widgets info : " + JSON.stringify(_widgets));
            if (_widgets !== null) {
                //let test_widget = new widgets(1,1, 4, 4);
                _widgets.forEach(r =>
                    self.tileInfo.push(new widgets(r.TileId, r.x, r.y, r.width, r.height, r.TileDesc, r.data, r.ScriptUri, r.StyleUri, r.ReadUri)));
                // this.mywidgets.push(test_widget);

                // console.log("List we have now inside object:" + JSON.stringify(self.tileInfo()))
                // console.log("number of widgets : " + self.tileInfo().length);
                //self.ImportsScriptsForTiles();
                let tile_counter:number=0
                self.tileInfo().forEach((item: widgets) => {
                    tile_counter = tile_counter + 1;
                    var status = self.MakeTileDetailsRequest(item);
                    console.log(`${tile_counter} call to tile :${status}`);
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
            //$.ajax({
            //    url: src,
            //    dataType: 'script',
            //    beforeSend: function (xhr) { xhr.setRequestHeader('Ocp-Apim-Subscription-Key', 'd002f0985c3242dbbd1fe73eb97aff3e'); },
            //    cache: false,
            //    success: function (data) {
            //        console.log('loaded scripts for ')
            //    },
            //    error: function () {
            //        alert("error");
            //    }
            //});


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

            let self = this;
            let tileDataObj = new WidgetsData(tileId, '', '');
            //tileDataObj.TileId = tileId;
            // console.log("Value passed to this fun:" + tileId)
            if (tileId === null || tileId == undefined)
                return;

            let data: any = ko.toJS(tileDataObj);

            //  console.log(ko.toJS(self.tileInfo()));
            // self.setDelay(tileId);
            //  kendo.ui.progress($("#tile-content_" + tileId), true);


            let myTrigger;
            NProgress.start();
            $.ajax({
                type: 'POST',
                url: "/Home/GetAPITileData/",
                data: data,
                beforeSend: function (xhr) {

                    myTrigger = setInterval(function () {
                        NProgress.inc();
                    }, 400);
                },
                complete: function () {

                    NProgress.done();
                    clearInterval(myTrigger);
                },
                success: function (response) {
                    // console.log("TileID:" + tileId);
                    // console.log(JSON.stringify(response));
                    const data = JSON.stringify(response);
                    //  console.log("updated Data for : " + JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId).forEach(
                    //     x => console.log(x.y, x.x, x.width, x.height, x.title, x.data))));

                    //  console.log(JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId)));

                    //   console.log("Lodash Changes:" + JSON.stringify(self.tileInfo()));
                    self.tileInfo().forEach((item: widgets) => {
                        if (item.tileId() === tileId)
                            item.data(response);
                    });
                }
            });
            
        }
        
        public MakeTileDetailsRequest = async (tileInfo: widgets) => {
            try {
               
                return await Promise.all([
                    this.CallScriptPromise(tileInfo.scriptUri(), 'js', tileInfo.tileId()),
                    this.CallStylePromise(tileInfo.styleUri(), 'css', tileInfo.tileId()),
                    this.CallDataPromise(tileInfo.readUri(), tileInfo.tileId())
                    ]);

            }
            catch (e) {
                console.log('There was an error loading for this tile'+e);
            }
        }
        
        public CallScriptPromise = (url: string, type: string, tileId:string): Promise<string> => {
            try {
                //this.scriptfilesadded = "" //list of files already added
                if (this.Scriptfilesadded.indexOf("[" + url + "]") == -1) {
                    //this.loadjscssfile(url, type)
                    this.Scriptfilesadded += "[" + url + "]" //List of files added in the form "[filename1],[filename2],etc"

                    console.log("Loading Javascripts : " + url + "   of type:" + type);

                    return new Promise<string>(resolve => {
                        $.ajax({
                            dataType: 'script',
                            url: "/Home/GetApiScript/",
                            data: { 'url': url, 'type': type },
                            beforeSend: function () { $("#loading-progress_" + tileId).show(); }, // <Show OverLay
                            success: function (response) {
                                console.log('successfully loaded scripts..');
                                $("#loading-progress_" + tileId).hide();
                            },
                            complete: function () { $("#loading-progress_" + tileId).hide(); } //<Hide Overlay
                        });
                    });
                }
                else {
                    return new Promise<string>(resolve => {
                        console.log("file already added!");
                    });
                }
            }
            catch (e) {
                console.log("This error happens when loading a data: " + e);
            }
        }

        public CallDataPromise = (url: string, tileId: string): Promise<string> => {
            try {
                console.log("Loading for tile Data:" + url);
                return new Promise<string>(resolve => {
                    let self = this;
                    let tileDataObj = new WidgetsData(tileId, '', '');
                    //tileDataObj.TileId = tileId;
                    // console.log("Value passed to this fun:" + tileId)
                    if (tileId === null || tileId == undefined)
                        return;
                    let data: any = ko.toJS(tileDataObj);
                    let myTrigger;
                    NProgress.start();
                    $.ajax({
                        type: 'POST',
                        url: "/Home/GetAPITileData/",
                        data: { 'resource': url },
                    
                        beforeSend: function (xhr) {
                            $("#loading-progress_" + tileId).show();
                            myTrigger = setInterval(function () {
                                NProgress.inc();
                            }, 400);
                        },
                        complete: function () {
                            NProgress.done();
                            clearInterval(myTrigger);
                            $("#loading-progress_" + tileId).hide();
                        },
                        success: function (response) {
                            const data = JSON.stringify(response);
                            self.tileInfo().forEach((item: widgets) => {
                                if (item.tileId() === tileId)
                                    item.data(response);
                            });
                        }
                       
                    });
                });
            }
            catch (e) {
                console.log(e);
            }
        }

        public CallStylePromise  = (url: string,type:string,tileId:string): Promise<string> => {
            if (this.Stylefilesadded.indexOf("[" + url + "]") == -1) {
                //this.loadjscssfile(url, type)
                this.Stylefilesadded += "[" + url + "]" //List of files added in the form "[filename1],[filename2],etc"

                console.log("Loading styles: " + url + "   of type:" + type);

                return new Promise<string>(resolve => {
                    
                    $.ajax({
                        url: "/Home/GetApiScript/",
                        type: 'GET',
                        dataType:'html',
                        data: { 'url': url, 'type': type },
                        beforeSend: function () { $("#loading-progress_" + tileId).show(); }, // <Show OverLay
                        success: function (response) {
                            $("head").append(`  <style> ${response} </style>`)
                        },
                        complete: function () { $("#loading-progress_" + tileId).hide(); } //<Hide Overlay
                    });
                });
            }
            else {
                return new Promise<string>(resolve => {
                    console.log("file already added!");
                    //return 'true';
                });
            }
        }
        
}
    
}
