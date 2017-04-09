


/*


var mas = ["Run", "Jump", "write"];

for (j=0; j<mas.length; j++){
    console.log(mas[j]);
}*/



/*
var name_input = document.getElementById('list1');
name_input.value="Write code";


var name_input = document.getElementById('list2');
name_input.value="Jump";

var name_input = document.getElementById('list3');
name_input.value="Eat";
*/


var options = [
    set0 = ['Option 1','Option 2'],
    set1 = ['First Option','Second Option','Third Option']
];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ol');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
/*document.getElementById('foo').appendChild(makeUL(options[0]));*/
window.onload = function(){document.getElementById('foo').appendChild(makeUL(options[0]));};