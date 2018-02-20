define(["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //export class widgets {
    //    x: KnockoutObservable<number>;
    //    y: KnockoutObservable<number>;
    //    width: KnockoutObservable<number>;
    //    height: KnockoutObservable<number>;
    //    innerwidgets: KnockoutObservableArray<widgets>;
    //    constructor(x: number, y: number, width: number, height: number) {
    //        this.x = ko.observable(x);
    //        this.y = ko.observable(y);
    //        this.width = ko.observable(width);
    //        this.height = ko.observable(height);
    //        this.innerwidgets = ko.observableArray([]);
    //    }
    //    public addNewWidget = () => {
    //        var mywidget = new widgets(
    //            0,
    //            0,
    //            Math.floor(1 + 3 * Math.random()),
    //            Math.floor(1 + 3 * Math.random())
    //        )
    //        this.innerwidgets.push(mywidget);
    //    };
    //}
    var MyWorkspaceViewModel = /** @class */ (function () {
        function MyWorkspaceViewModel(controller, componentInfo) {
            var _this = this;
            this.grid = null;
            this.AfterAddWidget = function (items) {
                var self = _this;
                if (_this.grid === null) {
                    console.log(JSON.stringify(_this.componentInfo));
                    _this.grid = $(_this.componentInfo.element).find('.grid-stack').gridstack({
                        cellHeight: 70,
                        verticalMargin: 35,
                        auto: false,
                        disableResize: true,
                        disableDrag: true
                    }).data('gridstack');
                }
                var item = _.find(items, function (i) { return i.nodeType == 1; });
                self.grid.addWidget(item);
                ko.utils.domNodeDisposal.addDisposeCallback(item, function () {
                    self.grid.remove_widget(item);
                });
            };
            this.widgets = controller.tileInfo;
            this.componentInfo = componentInfo;
            console.log(this.widgets());
            console.log(JSON.stringify(componentInfo));
        }
        return MyWorkspaceViewModel;
    }());
    exports.MyWorkspaceViewModel = MyWorkspaceViewModel;
    var MyWorkspaceComponent = /** @class */ (function () {
        function MyWorkspaceComponent(controller, componentInfo) {
            return {
                viewModel: {
                    createViewModel: function (controller, componentInfo) {
                        return new MyWorkspaceViewModel(controller, componentInfo);
                    }
                },
                //template: require("html-loader!./MyWorkspaceView.html")
                //template:
                //    [
                //        '<div class="grid-stack" data-bind="foreach: {data: widgets}">',
                //        '<div class="grid-stack-item" data-bind="attr:{\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
                //            '<div class="grid-stack-item-content">',
                //                '<p style="text-align:center;"> Panel content </p>',
                //                '<p style = "text-align:center;"> <button type="button" class= "btn btn-success"> See More Dock Activity </button></p>',
                //            '</div>',
                //        '</div>',
                //        '</div>'
                //        //'<div class="grid-stack" data-bind="foreach: {data: widgets}">',
                //        //'   <div class="grid-stack-item" data-bind="attr: {\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
                //        //'       <div class="grid-stack-item-content"><button data-bind="click: $root.delete_widget">Delete me</button></div>',
                //        //'   </div>',
                //        //'</div> '
                //    ].join('')
                template: { element: 'gridstack-template' }
            };
        }
        return MyWorkspaceComponent;
    }());
    exports.MyWorkspaceComponent = MyWorkspaceComponent;
});
//# sourceMappingURL=MyWorkspaceComponent.js.map