define(["require", "exports", "./ComponentRegistration", "./MyWorkspace/MyWorkspace", "../node_modules/gridstack/dist/gridstack.all.js"], function (require, exports, ComponentRegistration_1, MyWorkspace_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyWorkSpaceScript = MyWorkspace_1.MyWorkSpaceScript;
    var Main = /** @class */ (function () {
        function Main() {
            ComponentRegistration_1.ComponentRegistration.registerComponents();
        }
        return Main;
    }());
    exports.Main = Main;
    var m = new Main();
});
//# sourceMappingURL=index.js.map