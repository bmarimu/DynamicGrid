require("expose-loader?ko!knockout");
//import "../node_modules/systemjs/dist/system.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
import * as _ from 'lodash';
import * as WebFont  from "webfontloader";
import '../node_modules/underscore/underscore.js';
import "../node_modules/jquery-ui-bundle/jquery-ui.js";
import './styles/main.scss';

//import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js";
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js";

import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js";

import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js";
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js";



console.log(_);


let config: WebFont.Config = {
    typekit: {id: 'zru5jsj'}
};

WebFont.load(config);