export class widgets {
    tileId: KnockoutObservable<string>;
    x: KnockoutObservable<number>;
    y: KnockoutObservable<number>;
    width: KnockoutObservable<number>;
    height: KnockoutObservable<number>;
    auto_position: KnockoutObservable<boolean>;
    title: KnockoutObservable<string>;
    tileData: KnockoutObservable<string>;
    data: KnockoutObservable<string>;
    scriptUri: KnockoutObservable<string>;
    styleUri: KnockoutObservable<string>;
    readUri: KnockoutObservable<string>;

    // innerwidgets: KnockoutObservableArray<widgets>;
    constructor(tileId: string, x: number, y: number, width: number, height: number, title: string, data: string, scriptUri: string, styleUri: string, dataUri: string) {
        this.tileId = ko.observable(tileId);
        this.x = ko.observable(x);
        this.y = ko.observable(y);
        this.width = ko.observable(width);
        this.height = ko.observable(height);
        this.auto_position = ko.observable(false);
        this.title = ko.observable(title);
        this.data = ko.observable(data);
        this.scriptUri = ko.observable(scriptUri);
        this.styleUri = ko.observable(styleUri);
        this.readUri = ko.observable(dataUri);
    }
}

export class WidgetsData {
    public TileData: KnockoutObservable<string>;
    public TileId: KnockoutObservable<string>;
    public UserId: KnockoutObservable<string>;
    public
    constructor(tileId: string, tileData: string, userId: string) {
        this.TileId = ko.observable(tileId),
            this.TileData = ko.observable(tileData),
            this.UserId = ko.observable(userId)
    }
}
