import Packery = require("packery");

 /**
 * main
 */
class MainInit 
{
    private _packery:Packery;
    private _grid:any;

    constructor() 
    {
    }

    init()
    {
        //alert("init called");
        this._grid = document.querySelector('.grid');
        this._grid.addEventListener('click', this.clickHandler);
        this._packery = new Packery(this._grid, 
        {
            // options
            itemSelector: '.grid-item',
            gutter: 10
        });
    }

    clickHandler(event:any)
    {
        //alert("click called");
        // remove clicked element
        this._packery.remove(event.target);
        // shiftLayout remaining item elements
       // this._packery.shiftLayout();
    }
}