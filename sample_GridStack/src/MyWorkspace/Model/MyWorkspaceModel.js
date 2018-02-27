define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var widgets = /** @class */ (function () {
        // innerwidgets: KnockoutObservableArray<widgets>;
        function widgets(tileId, x, y, width, height, title, data, scriptUri, styleUri, dataUri, edituri) {
            this.tileId = ko.observable(tileId);
            this.x = ko.observable(x);
            this.y = ko.observable(y);
            this.width = ko.observable(width);
            this.height = ko.observable(height);
            this.auto_position = ko.observable(false);
            this.title = ko.observable(title);
            this.data = ko.observable(data);
            this.scriptUri = ko.observable(scriptUri);
            this.styleUri = ko.observable(styleUri);
            this.readUri = ko.observable(dataUri);
            this.editUri = ko.observable(edituri);
        }
        return widgets;
    }());
    exports.widgets = widgets;
    var WidgetsData = /** @class */ (function () {
        function WidgetsData(tileId, tileData, userId) {
            this.TileId = ko.observable(tileId),
                this.TileData = ko.observable(tileData),
                this.UserId = ko.observable(userId);
        }
        return WidgetsData;
    }());
    exports.WidgetsData = WidgetsData;
});
//# sourceMappingURL=MyWorkspaceModel.js.map