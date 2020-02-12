// Plus and Minus function

function Input_ChangeValue(trigger, operation) {
    let inputChange = trigger.parentElement.querySelector("input");

    if (inputChange != null) {
        let actualValue = parseInt(inputChange.value);
        let nextValue = 0;

        switch (operation) {
            case "-":
                nextValue = actualValue - 1;
                break;
            case "+":
                nextValue = actualValue + 1;
                break;
        }

        if (nextValue <= 0) nextValue = 0;

        inputChange.value = nextValue;

        calculateSubTotal(inputChange);
    }
}

// Calculate Subtotal and total

function calculateSubTotal(inputElement) {
    
    // INDIVIDUAL SUBTOTAL
    let subTotalDiv = inputElement.parentElement.parentElement.querySelector(".subtotal-price");    

    if (inputElement != null && subTotalDiv != null) {
        let qty = parseFloat(inputElement.value);
        let price = parseFloat(inputElement.getAttribute("data-price"));
        let subtotal = (qty * price).toFixed(2);
                
        subTotalDiv.innerHTML = `£${subtotal}`; 
    }    

    
    // FINAL SUBTOTAL, VAT and TOTAL
    const subtotals = document.querySelectorAll(".subtotal-price");
    let total = 0;
    subtotals.forEach(subtotalItem => {
        const priceString = subtotalItem.innerText.replace("£", "");
        total += parseFloat(priceString);
    });
    const basketTotal = document.querySelector("#basket-total");
    const basketSubTotal = document.querySelector('#basket-subtotal')
    const VAT = document.querySelector("#basket-VAT")
    const vatP = total / 5
    const finalTotal = total + vatP


    basketSubTotal.innerHTML = '£'+total.toFixed(2);
    VAT.innerHTML = '£'+vatP.toFixed(2);
    basketTotal.innerHTML = '£'+finalTotal.toFixed(2);
}

// Like button transition

// let likeButton = document.getElementById('like-btn');
// let likeCount = 0;
// likeButton.addEventListener("click", function(){
//     likeCount++;
//     if (likeCount % 2 !== 0) {
//         likeButton.style.backgroundImage = "url('/img/shop/like.png')"
//     } else {
//         likeButton.style.backgroundImage = "url('/img/shop/like-before.png')"
//     }
// })

var likeButton = document.getElementsByClassName("like-btn");
for (let i = 0, l = likeButton.length; i < l; i++) {

    likeButton[i].addEventListener('click', function() {
        likeButton[i].classList.toggle('active');
    })
}