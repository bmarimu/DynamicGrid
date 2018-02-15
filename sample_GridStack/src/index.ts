
import '../node_modules/gridstack/dist/gridstack.all.js';
import { ComponentRegistration } from './ComponentRegistration';
import {MyWorkSpaceScript } from './MyWorkspace/MyWorkspace';
export class Main {
    constructor() {
        ComponentRegistration.registerComponents();
    }
}

var m = new Main();


export { MyWorkSpaceScript}