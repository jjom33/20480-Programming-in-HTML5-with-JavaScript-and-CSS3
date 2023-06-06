document.addEventListener('DOMContentLoaded', function (event) {
    //receives the html element name and returns the html element
    function createNode(element) {
        return document.createElement(element);
    }

    //receives the parent and child elements and appends the child to the parent
    function append(parent, el) {
        return parent.appendChild(el);
    }

    function addHobbies () {
        const inputList = document.querySelectorAll('.hobbiesInput');
        //check that inputList contains less than five elements,
        //add new inputs with the createNode and append functions, 
        //and if inputList contains more than five elements, remove the event listener
        if (inputList.length < 5) {
            
            const hobbiesList = document.getElementById('hobbiesList');        
            const newLineElement = createNode('br'),
            inputElement = createNode('input');

            inputElement.setAttribute("class", "hobbiesInput");

            append(hobbiesList, newLineElement);
            append(hobbiesList, inputElement);
        }
        else {
            document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
        }
    }
document.getElementById('newHobbyBtn').addEventListener('click', addHobbies);
});