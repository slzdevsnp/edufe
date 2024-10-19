const inventory = {
    apple: { price: 12, qty: 0 },
    cherry: { price: 15, qty: 0 },
    strawberry: { price: 18, qty: 0 }
};

function sum() {
    let total = 0;
    const keys = Object.keys(inventory);
    keys.forEach(key => {
        total += inventory[key].price * inventory[key].qty;
    });
    return total;
}

function calculate(box) {  /*box.id  is linked to id="apple" */
    let qty = 0;

    if(box.value.length > 0) {
        qty = parseInt(box.value);
    }

    inventory[box.id].qty = qty;

    const total = sum();
    return `$${total}.00`;
}

window.addEventListener('DOMContentLoaded', () => { 

    const totalContainer = document.getElementById('total-container');

    const inputBoxes = document.querySelectorAll('#calculator input');

    inputBoxes.forEach(box => {

        //this func executes when focus is outside of input box 
        box.addEventListener('change', () => { 
            console.log('box changed: ' + box.id + ' to val:' + box.value)
            totalContainer.textContent = calculate(box);
        });
        //this func executes when focus is inside input box but value chnaged
        box.addEventListener('keyup', () => { 
            totalContainer.textContent = calculate(box);
        });
        
    });
    
});
