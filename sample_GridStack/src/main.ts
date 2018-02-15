require("expose-loader?ko!knockout");
//import "../node_modules/systemjs/dist/system.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
import * as _ from 'lodash';
import '../node_modules/underscore/underscore.js';
import "../node_modules/jquery-ui-bundle/jquery-ui.js";
import './styles/main.scss';

//import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js";
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js";

import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js";

import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js";
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js";


import '../node_modules/gridstack/dist/gridstack.all.js';
import { ComponentRegistration } from './ComponentRegistration';
import { MyWorkSpaceScript } from './MyWorkspace/MyWorkspace';
export class Main {
    constructor() {
        ComponentRegistration.registerComponents();
    }
}

var m = new Main();


export { MyWorkSpaceScript }

console.log(_);