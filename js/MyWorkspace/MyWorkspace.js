define(["require", "exports", "./Model/MyWorkspaceModel.js"], function (require, exports, MyWorkspaceModel_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyWorkSpaceScript;
    (function (MyWorkSpaceScript) {
        var MyWorkSpaceController = /** @class */ (function () {
            function MyWorkSpaceController(_widgets) {
                //ko.mapping.fromJS(this.mywidgets, _widgets);
                var _this = this;
                this.mywidgets = ko.observableArray([]);
                this.widgets = ko.observableArray([]);
                if (_widgets !== null) {
                    //let test_widget = new widgets(1,1, 4, 4);
                    _widgets.forEach(function (r) { return _this.mywidgets.push(new MyWorkspaceModel_js_1.widgets(r.x, r.y, r.width, r.height)); });
                    // this.mywidgets.push(test_widget);
                }
                console.log("number of widgets : " + this.mywidgets().length);
                console.log("number of widgets : " + this.mywidgets().forEach(function (x) { return console.log(x.y(), x.x(), x.width(), x.height()); }));
            }
            return MyWorkSpaceController;
        }());
        MyWorkSpaceScript.MyWorkSpaceController = MyWorkSpaceController;
        //var vm = new exports.MyWorkSpaceScript.MyWorkSpaceController();
        //ko.applyBindings(vm);
    })(MyWorkSpaceScript = exports.MyWorkSpaceScript || (exports.MyWorkSpaceScript = {}));
});
//# sourceMappingURL=MyWorkspace.js.map