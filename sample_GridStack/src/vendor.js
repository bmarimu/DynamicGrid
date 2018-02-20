define(["require", "exports", "jquery", "lodash", "webfontloader", "../node_modules/underscore/underscore.js", "../node_modules/jquery-ui-bundle/jquery-ui.js", "./styles/main.scss", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js", "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js"], function (require, exports, $, _, WebFont) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("expose-loader?ko!knockout");
    window["$"] = $;
    window["jQuery"] = $;
    console.log(_);
    var config = {
        typekit: { id: 'zru5jsj' }
    };
    WebFont.load(config);
});
//# sourceMappingURL=vendor.js.map