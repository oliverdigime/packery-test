var MainInit = (function () {
    function MainInit() {
    }
    MainInit.prototype.init = function () {
        this._grid = document.querySelector('.grid');
        this._packery = new Packery(this._grid, {
            itemSelector: '.grid-item',
            gutter: 0,
            columnWidth: 125
        });
        var elements = this._grid.getElementsByClassName('grid-item');
        var index = 0;
        for (index = 0; index < elements.length; index++) {
            var gridItem = elements[index];
            var draggable = new Draggabilly(gridItem);
            this._packery.bindDraggabillyEvents(draggable);
        }
    };
    MainInit.prototype.clickHandler = function (event) {
        this._packery.remove(event.target);
        this._packery.shiftLayout();
    };
    return MainInit;
}());
