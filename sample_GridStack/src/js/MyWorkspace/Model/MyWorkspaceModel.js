define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var widgets = /** @class */ (function () {
        // innerwidgets: KnockoutObservableArray<widgets>;
        function widgets(x, y, width, height) {
            this.x = ko.observable(x);
            this.y = ko.observable(y);
            this.width = ko.observable(width);
            this.height = ko.observable(height);
            this.auto_position = ko.observable(false);
            //this.innerwidgets = ko.observableArray([]);
        }
        return widgets;
    }());
    exports.widgets = widgets;
});
//# sourceMappingURL=MyWorkspaceModel.js.map