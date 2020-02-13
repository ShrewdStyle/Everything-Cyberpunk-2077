
// Plus shop button
let count1 = 0;
let count2 = 0;
let count3 = 0;

function buttonClick1(){
    count1++;
    document.getElementById('valueTest1').value = count1;

    let subtotal = 0;
    let itemID = document.getElementById('valueTest1');

    if (typeof itemID === 'undefined' || itemID === null) {
        alert("No such item - " + "valueTest1");
    } else {
        subtotal = subtotal + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('itemTotal1').innerHTML = "£" + subtotal;
}
function buttonClick2(){
    count2++;
    document.getElementById('valueTest2').value = count2;
}
function buttonClick3(){
    count3++;
    document.getElementById('valueTest3').value = count3;
}

// Minus shop button
function buttonRemove1(){
    count1--;
    document.getElementById('valueTest1').value = count1;
    if (count1 < 1){
        count1 = 1;
    }

    let subtotal = 0;
    let itemID = document.getElementById('valueTest1');

    if (typeof itemID === 'undefined' || itemID === null) {
        alert("No such item - " + "valueTest1");
    } else {
        subtotal = subtotal + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('itemTotal1').innerHTML = "£" + subtotal;
}
function buttonRemove2(){
    count2--;
    document.getElementById('valueTest2').value = count2;
    if (count2 < 1){
        count2 = 1;
    }
}
function buttonRemove3(){
    count3--;
    document.getElementById('valueTest3').value = count3;
    if (count3 < 1){
        count3 = 1;
    }
}

// SUBtotal Price

function calculateSubTotal() {
    let subtotal = 0;
    let itemID = document.getElementById('valueTest1');

    if (typeof itemID === 'undefined' || itemID === null) {
        alert("No such item - " + "valueTest1");
    } else {
        subtotal = subtotal + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    console.log(itemID.value)
    document.getElementById('itemTotal1').innerHTML = "£" + subtotal;
}