
$(function () {

    var ViewModel = function (controller, componentInfo) {
        var grid = null;

        this.widgets = controller.widgets;
        this.AfterAddWidget = function (items) {
            if (grid == null) {
                grid = $(componentInfo.element).find('.grid-stack').gridstack({
                    auto: false,
                    animate: true,
                    float: true,
                    resizable: {
                        handles: 'e, se, s, sw, w'
                    }
                }).data('gridstack');
            }

            var item = _.find(items, function (i) { return i.nodeType == 1 });
            grid.add_widget(item);
            ko.utils.domNodeDisposal.addDisposeCallback(item, function () {
                grid.remove_widget(item);
            });
        };
    };


    ko.components.register('dashboard-grid', {
        viewModel: {
            createViewModel: function (controller, componentInfo) {
                return new ViewModel(controller, componentInfo);
            }
        },
        template: { element: 'gridstack-template' }
    });

    $(function () {
        var Controller = function (widgets) {
            this.widgets = ko.observableArray(widgets);
        };

        //var widgets = [
        //    { x: 0, y: 0, width: 4, height: 2 },
        //    { x: 2, y: 0, width: 4, height: 2 },
        //    { x: 4, y: 0, width: 4, height: 4 },
        //    { x: 6, y: 2, width: 4, height: 2 }
        //];

        //var controller = new Controller(widgets);
        //ko.applyBindings(controller);
    });


});