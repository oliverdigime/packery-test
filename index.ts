declare var Packery:any;

// start the demo
function initDemo()
{
    var elem = document.querySelector('.grid');
    var pckry = new Packery( elem, {
      // options
      itemSelector: '.grid-item',
      gutter: 10
    });

    // element argument can be a selector string
    //   for an individual element
    var pckry = new Packery( '.grid', {
    // options
    });
}