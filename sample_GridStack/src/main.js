define(["require", "exports", "jquery", "lodash", "./ComponentRegistration", "./MyWorkspace/MyWorkspace", "../node_modules/underscore/underscore.js", "../node_modules/jquery-ui-bundle/jquery-ui.js", "./styles/main.scss", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js", "../node_modules/gridstack/dist/gridstack.all.js"], function (require, exports, $, _, ComponentRegistration_1, MyWorkspace_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("expose-loader?ko!knockout");
    window["$"] = $;
    window["jQuery"] = $;
    exports.MyWorkSpaceScript = MyWorkspace_1.MyWorkSpaceScript;
    var Main = /** @class */ (function () {
        function Main() {
            ComponentRegistration_1.ComponentRegistration.registerComponents();
        }
        return Main;
    }());
    exports.Main = Main;
    var m = new Main();
    console.log(_);
});
//# sourceMappingURL=main.js.map