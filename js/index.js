// Save the reference to text - field into a variable. | < input type = "text" >
let itemInput = document.getElementById("input-text");
console.log(itemInput);

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let addItem = document.getElementById("add-btn");
console.log(addItem);

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let shoppingList = document.getElementById("list");
console.log(shoppingList);

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.getElementsByClassName("feedback");
console.log(feedback);

// Save the reference to error paragraph for feedback | <p class="error"></p>
let err = document.querySelector(".error");
// Start function addItem.
function addItemFn() {

    //Collect the value 
    let item = itemInput.value;
    console.log(item);


    //trim the whitespace
    item = item.trim();
    //attach as a node to document
    if (item !== "") {

        err.innerText = null;
        //create the list item
        let li = document.createElement("li");

        //add content
        li.innerText = item;
        shoppingList.appendChild(li);

        //access and overwrite existing value with empty string
        itemInput.value = "";

        //Keep Focus / cursor on input tag after it is wiped out 
        itemInput.focus();
    } else {
        err.innerText = "Enter a valid item before clicking";
    }

};

// Register your function addItem for click event on button.



addItem.addEventListener("click", addItemFn);
