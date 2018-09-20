const boxes = document.querySelectorAll(".col")

for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = i + 1;
}
const colors = [
    'rgb(255, 0, 102)', //0 
    'rgb(153, 0, 153)', //1
    'rgb(255, 0, 0)', //2
    'rgb(0, 204, 0)', //3
    'rgb(255, 0, 102)' //4
]
//defining the class
class NumberBoxes {
    constructor(colors) {
        //the constructor should run as soon as i create a new instances
        // this.changeNumber();
        // this.changeColor();
        this.colors = colors;
        this.addClickHandlers();
    }
    changeNumber(num) {
        //console.log("Running changeNumber")
        //console.log(num)
        //first loop and DESEND(itterate down not up) starting fromthe num that was first in
        for (let i = num; i > 0; i--) {
            //grab the textcontent from the box(parseInt changes the string value into a number value
            //so it can be incremented)
            let value = parseInt(boxes[i - 1].textContent);
            //then increment by 1 
            value = (value >= 9) ? 1 : value + 1;
            //then put it back in the box
            boxes[i - 1].textContent = value;
        }

    }
    changeColor(num) {
        //console.log("Running changeColor")
        //first loop and DESEND(itterate down not up) starting from the num that was passed in
        // let style = window.getComputedStyle(boxes[num-1])
        // console.log(style.backgroundColor)
        for (let i = num; i > 0; i--) {
            //i need to get the computed style of my element
            let style = window.getComputedStyle(boxes[i - 1])
            //using the style that i just computed i will search through the colors array to find the index of the boxes
            //current color
            let index = this.colors.indexOf(style.backgroundColor)
            //increment the index by 1
            index = (index >= this.colors.length - 1) ? 0 : index + 1;
            //set the background color to the box
            boxes[i - 1].style.backgroundColor = this.colors[index];
        }
    }
    //method to add click handlers on each box
    addClickHandlers() {
        //boxes is outside the class you are going to loop over every element of this nodelist...
        boxes.forEach(box => {
            //..then add a event listener on each one
            box.addEventListener('click', e => {
                //then run the following functions
                this.changeNumber(box.dataset.place);
                this.changeColor(box.dataset.place);
            })
        })
    }
}
//This is how you create a new instance
const numberBox = new NumberBoxes(colors)
