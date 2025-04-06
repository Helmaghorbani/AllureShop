const priceArr = JSON.parse(localStorage.getItem('price')) || [];
const totalTable = document.getElementById('total');
let total = 0;


if (priceArr.length > 0) {
  priceArr.forEach((price, index) => {
    total += price; 
    const row = totalTable.insertRow(-1); 
    const priceCell = row.insertCell(0);
    const actionCell = row.insertCell(1);
    priceCell.innerText = `$${price}`;
    actionCell.innerHTML = `<button onclick="removeItem(${index})">حذف</button>`;
  });

  const totalRow = totalTable.insertRow(-1); 
  const totalCell = totalRow.insertCell(0);
  totalCell.colSpan = 2;
  totalCell.innerText = `Total: $${total}`;
} else {
  const row = totalTable.insertRow(-1);
  const cell = row.insertCell(0);
  cell.colSpan = 2;
  cell.innerText = 'سبد خرید شما خالی است.';
}



function removeItem(index) {
    priceArr.splice(index, 1); 
    localStorage.setItem('price', JSON.stringify(priceArr)); 
    location.reload(); 
}


document.getElementById('totalPrice').innerText = `جمع کل: $${total.toFixed(2)}`;


function removeItem(index) {
    priceArr.splice(index, 1); 
    localStorage.setItem('price', JSON.stringify(priceArr)); 
    location.reload(); 
}