var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
                this.thing = ko.observable('');
                this.Tile_Hover = function (tileInfo) {
                    console.log("on tile hover of tileid:" + tileInfo.tileId());
                    $(".smart-menu").hover(function () {
                        $('#smart-menu-' + tileInfo.tileId()).toggleClass('hidden');
                    });
                };
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
                    var self = _this;
                    var tileDataObj = new MyWorkspaceModel_1.WidgetsData(tileId, '', '');
                    //tileDataObj.TileId = tileId;
                    // console.log("Value passed to this fun:" + tileId)
                    if (tileId === null || tileId == undefined)
                        return;
                    var data = ko.toJS(tileDataObj);
                    //  console.log(ko.toJS(self.tileInfo()));
                    // self.setDelay(tileId);
                    //  kendo.ui.progress($("#tile-content_" + tileId), true);
                    var myTrigger;
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
                            var data = JSON.stringify(response);
                            //  console.log("updated Data for : " + JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId).forEach(
                            //     x => console.log(x.y, x.x, x.width, x.height, x.title, x.data))));
                            //  console.log(JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId)));
                            //   console.log("Lodash Changes:" + JSON.stringify(self.tileInfo()));
                            self.tileInfo().forEach(function (item) {
                                if (item.tileId() === tileId)
                                    item.data(response);
                            });
                        }
                    });
                };
                this.MakeTileDetailsRequest = function (tileInfo) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, Promise.all([
                                        this.CallScriptPromise(tileInfo.scriptUri(), 'js', tileInfo.tileId()),
                                        this.CallStylePromise(tileInfo.styleUri(), 'css', tileInfo.tileId()),
                                        this.CallDataPromise(tileInfo)
                                    ])];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                e_1 = _a.sent();
                                console.log('There was an error loading for this tile' + e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                this.CallScriptPromise = function (url, type, tileId) {
                    try {
                        //this.scriptfilesadded = "" //list of files already added
                        if (_this.Scriptfilesadded.indexOf("[" + url + "]") == -1) {
                            //this.loadjscssfile(url, type)
                            _this.Scriptfilesadded += "[" + url + "]"; //List of files added in the form "[filename1],[filename2],etc"
                            console.log("Loading Javascripts : " + url + "   of type:" + type);
                            return new Promise(function (resolve) {
                                $.ajax({
                                    dataType: 'script',
                                    url: "/Home/GetApiScript/",
                                    data: { 'url': url, 'type': type },
                                    //beforeSend: function () { $("#loading-progress_" + tileId).show(); }, // <Show OverLay
                                    success: function (response) {
                                        console.log('successfully loaded scripts..');
                                        $("#loading-progress_" + tileId).hide();
                                    },
                                });
                            });
                        }
                        else {
                            return new Promise(function (resolve) {
                                console.log("file already added!");
                            });
                        }
                    }
                    catch (e) {
                        console.log("This error happens when loading a data: " + e);
                    }
                };
                this.CallDataPromise = function (tileInfo) {
                    try {
                        return new Promise(function (resolve) {
                            var myTrigger;
                            NProgress.start();
                            $.ajax({
                                type: 'POST',
                                url: "/Home/GetAPITileData/",
                                data: { 'resource': tileInfo.readUri() },
                                beforeSend: function (xhr) {
                                    $("#loading-progress_" + tileInfo.tileId()).show();
                                    myTrigger = setInterval(function () {
                                        NProgress.inc();
                                    }, 400);
                                },
                                complete: function () {
                                    NProgress.done();
                                    clearInterval(myTrigger);
                                    $("#loading-progress_" + tileInfo.tileId()).hide();
                                },
                                success: function (response) {
                                    if (response.Success)
                                        tileInfo.data(response.Message);
                                    else
                                        console.log("Failed to get tile data response or its empty..");
                                }
                            });
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                this.CallStylePromise = function (url, type, tileId) {
                    if (_this.Stylefilesadded.indexOf("[" + url + "]") == -1) {
                        //this.loadjscssfile(url, type)
                        _this.Stylefilesadded += "[" + url + "]"; //List of files added in the form "[filename1],[filename2],etc"
                        console.log("Loading styles: " + url + "   of type:" + type);
                        return new Promise(function (resolve) {
                            $.ajax({
                                url: "/Home/GetApiScript/",
                                type: 'GET',
                                dataType: 'html',
                                data: { 'url': url, 'type': type },
                                beforeSend: function () { $("#loading-progress_" + tileId).show(); },
                                success: function (response) {
                                    $("head").append("  <style> " + response + " </style>");
                                },
                                complete: function () { $("#loading-progress_" + tileId).hide(); } //<Hide Overlay
                            });
                        });
                    }
                    else {
                        return new Promise(function (resolve) {
                            console.log("file already added!");
                            //return 'true';
                        });
                    }
                };
                this.EditTile = function (tileInfo) {
                    console.log(JSON.stringify(tileInfo.readUri()) + "is passed for Editing...");
                    try {
                        return new Promise(function (resolve) {
                            var myTrigger;
                            NProgress.start();
                            $.ajax({
                                type: 'POST',
                                url: "/Home/GetAPIEditTileData/",
                                data: { 'resource': tileInfo.editUri() },
                                beforeSend: function (xhr) {
                                    //$("#loading-progress_" + tileInfo.tileId()).show();
                                    myTrigger = setInterval(function () {
                                        NProgress.inc();
                                    }, 400);
                                },
                                complete: function () {
                                    NProgress.done();
                                    clearInterval(myTrigger);
                                    //$("#loading-progress_" + tileInfo.tileId()).hide();
                                },
                                success: function (response) {
                                    if (response.Success) {
                                        tileInfo.data(response.Message);
                                        localStorage.clear();
                                        localStorage.setItem('currentTileId', JSON.stringify(tileInfo.tileId()));
                                    }
                                    else
                                        console.log("Failed to get tile data response or its empty..");
                                }
                            });
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                var self = this;
                this.Stylefilesadded = "";
                this.Scriptfilesadded = "";
                // this.tileData = ko.computed(this.GetTileData)
                //ko.mapping.fromJS(this.mywidgets, _widgets);
                // console.log("passed widgets info : " + JSON.stringify(_widgets));
                if (_widgets !== null) {
                    //let test_widget = new widgets(1,1, 4, 4);
                    _widgets.forEach(function (r) {
                        return self.tileInfo.push(new MyWorkspaceModel_1.widgets(r.TileId, r.x, r.y, r.width, r.height, r.TileDesc, r.data, r.ScriptUri, r.StyleUri, r.ReadUri, r.EditUri));
                    });
                    // this.mywidgets.push(test_widget);
                    // console.log("List we have now inside object:" + JSON.stringify(self.tileInfo()))
                    // console.log("number of widgets : " + self.tileInfo().length);
                    //self.ImportsScriptsForTiles();
                    var tile_counter_1 = 0;
                    self.tileInfo().forEach(function (item) {
                        tile_counter_1 = tile_counter_1 + 1;
                        var status = self.MakeTileDetailsRequest(item);
                        console.log(tile_counter_1 + " call to tile :" + status);
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