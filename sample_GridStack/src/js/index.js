define(["require", "exports", "./ComponentRegistration", "./styles/main.scss", "./MyWorkspace/MyWorkspace"], function (require, exports, ComponentRegistration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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