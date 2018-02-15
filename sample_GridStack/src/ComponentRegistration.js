define(["require", "exports", "./MyWorkspace/Component/MyWorkspaceComponent"], function (require, exports, MyWorkspaceComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentRegistration = /** @class */ (function () {
        function ComponentRegistration() {
        }
        ComponentRegistration.registerComponents = function () {
            ko.components.register("my-workspace", new MyWorkspaceComponent_1.MyWorkspaceComponent(null, null));
        };
        return ComponentRegistration;
    }());
    exports.ComponentRegistration = ComponentRegistration;
});
//# sourceMappingURL=ComponentRegistration.js.map