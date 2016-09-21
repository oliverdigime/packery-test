import Packery = require("packery");
import Draggabilly = require("draggabilly");

 /**
 * main
 */
class MainInit 
{
    private _packery:Packery;
    private _grid:Element;

    constructor()
    {
    }

    init()
    {
        this._grid = document.querySelector('.grid');
        //this._grid.addEventListener('click', event => this.clickHandler(event));
        this._packery = new Packery(this._grid,  
        {
            // options
            itemSelector: '.grid-item',
            gutter: 0,
            columnWidth: 125
        });

        let elements:NodeListOf<Element> = this._grid.getElementsByClassName('grid-item');
        let index = 0;
        for(index=0; index < elements.length; index++)
        {
            let gridItem:Element = elements[index];
            let draggable:Draggabilly = new Draggabilly(gridItem);
            this._packery.bindDraggabillyEvents(draggable);   
        }
    }

    private clickHandler(event:any)
    {
        // remove clicked element
        this._packery.remove(event.target);
        // shiftLayout remaining item elements
        this._packery.shiftLayout();
    }
}