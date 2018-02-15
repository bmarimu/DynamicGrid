import * as _ from 'underscore';
import { widgets } from "../Model/MyWorkspaceModel.js"
//export class widgets {
//    x: KnockoutObservable<number>;
//    y: KnockoutObservable<number>;
//    width: KnockoutObservable<number>;
//    height: KnockoutObservable<number>;
//    innerwidgets: KnockoutObservableArray<widgets>;
//    constructor(x: number, y: number, width: number, height: number) {
//        this.x = ko.observable(x);
//        this.y = ko.observable(y);
//        this.width = ko.observable(width);
//        this.height = ko.observable(height);
//        this.innerwidgets = ko.observableArray([]);
//    }
//    public addNewWidget = () => {
//        var mywidget = new widgets(
//            0,
//            0,
//            Math.floor(1 + 3 * Math.random()),
//            Math.floor(1 + 3 * Math.random())
//        )
//        this.innerwidgets.push(mywidget);
//    };
//}
export class MyWorkspaceViewModel {

    public widgets: any;
    public componentInfo: any;
    public grid: any = null;
    constructor(controller: any, componentInfo: any) {
        this.widgets = controller.tileInfo;
        this.componentInfo = componentInfo;
        console.log(this.widgets());
        console.log(JSON.stringify(componentInfo));
    }

    public AfterAddWidget = (items) => {
        let self = this;

        if (this.grid === null) {
            console.log(JSON.stringify(this.componentInfo));
            
            this.grid = $(this.componentInfo.element).find('.grid-stack').gridstack({
                cellHeight: 80,
                verticalMargin: 10,
                auto: false,
               
            }).data('gridstack');
        }

        let item = _.find(items, (i: any) => { return i.nodeType == 1 });

        self.grid.addWidget(item);
        ko.utils.domNodeDisposal.addDisposeCallback(item, () => {
            self.grid.remove_widget(item);
        });
    };
}



export class MyWorkspaceComponent {

    constructor(controller: any, componentInfo: any) {

        return {
            viewModel: {
                createViewModel: (controller, componentInfo) => {
                    return new MyWorkspaceViewModel(controller, componentInfo);
                }
            },
            //template: require("html-loader!./MyWorkspaceView.html")

            //template:
            //    [
            //        '<div class="grid-stack" data-bind="foreach: {data: widgets}">',
            //        '<div class="grid-stack-item" data-bind="attr:{\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
            //            '<div class="grid-stack-item-content">',
            //                '<p style="text-align:center;"> Panel content </p>',
            //                '<p style = "text-align:center;"> <button type="button" class= "btn btn-success"> See More Dock Activity </button></p>',
            //            '</div>',
            //        '</div>',
            //        '</div>'


            //        //'<div class="grid-stack" data-bind="foreach: {data: widgets}">',
            //        //'   <div class="grid-stack-item" data-bind="attr: {\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
            //        //'       <div class="grid-stack-item-content"><button data-bind="click: $root.delete_widget">Delete me</button></div>',
            //        //'   </div>',
            //        //'</div> '
            //    ].join('')
            template: { element: 'gridstack-template' }

        }
    }
}