// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.phoneme-item',
    // layoutMode: 'fitRows',

    layoutMode: 'packery',
    packery: {
        gutter: 2
    },
    stamp: '.stamp',

    getSortData: {
        name: '[name]',
        symbol: '.symbol',
        number: '.number parseInt',
        sonority: '.sonority parseFloat',
        category: '[data-category]',
        weight: function(itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if sonority is greater than 3
    sonGreaterThan5: function() {
        var number = $(this).find('.sonority').text();
        return parseFloat(number, 10) > 5;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

filters = {}
// bind filter button click
$('.filters').on('click', '.button', function(event) {
    // $checkbox = $(event.currentTarget);
    // $button = $checkbox.parent('.button');
    $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    var filterValue = filters[filterGroup] = $button.attr('data-filter');
    // try to match function
    filters[filterGroup] = filterFns[filterValue] || filters[filterGroup];
    // combine filters
    if (filterValue in filterFns) {
        console.log(filterFns, filterValue);
        $grid.isotope({
            filter: filterFns[filterValue]
        });
    } else {
        $grid.isotope({
            filter: concatValues(filters)
        });
    }
    // set filter for Isotope

});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.button', function(event) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        var $button = $(event.currentTarget);
        $button.addClass('is-checked');
    });
});

// bind sort button click
$('.sorters').on('click', '.button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
        sortBy: sortByValue
    });
});


$('.ui-group').packery({
    itemSelector: '.ui-group-item',
    gutter: 1,
    percentPosition: true
})

// collection of Draggabillies
var draggies = [];
var isDrag = false;

// make all grid-items draggable
$grid.find('.phoneme-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  draggies.push( draggie );
  // bind drag events to Packery
  // $grid.packery( 'bindDraggabillyEvents', draggie );
});


// utils ----------------

let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;


// flatten object by concatting values, making sure to apply demorgans laws ','
function concatValues(obj) {

    value = "";
    for (var prop in obj) {
        var parts = obj[prop].split(",");
        var vals = value.split(",");
        var newvals = cartesian(parts, vals);

        value = newvals.map(x => concatArr(x)).join(',');
    }

    return value;
}

// flatten object by concatting values
function concatArr(arr) {
  var value = '';
  for (var v in arr) {
    value += arr[v];
  }
  return value;
}



// --------------- URL __hash__
// function getHashFilter() {
//   var hash = location.hash;
//   // get filter=filterName
//   var matches = location.hash.match( /filter=([^&]+)/i );
//   var hashFilter = matches && matches[1];
//   return hashFilter && decodeURIComponent( hashFilter );
// }
//
// $( function() {
//
//   var $grid = $('.isotope');
//
//   // bind filter button click
//   var $filters = $('.filters').on( 'click', '.button', function() {
//     var filterAttr = $( this ).attr('data-filter');
//     // set filter in hash
//     location.hash = 'filter=' + encodeURIComponent( filterAttr );
//   });
//
//   var isIsotopeInit = false;
//
//   function onHashchange() {
//     var hashFilter = getHashFilter();
//     if ( !hashFilter && isIsotopeInit ) {
//       return;
//     }
//     isIsotopeInit = true;
//     // filter isotope
//     $grid.isotope({
//       itemSelector: '.phoneme-item',
//       filter: hashFilter
//     });
//     // set selected class on button
//     if ( hashFilter ) {
//       $filters.find('.is-checked').removeClass('is-checked');
//       $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
//     }
//   }
//
//   $(window).on( 'hashchange', onHashchange );
//   // trigger event handler to init Isotope
//   onHashchange();
// });
