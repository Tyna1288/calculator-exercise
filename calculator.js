// window.addEventListener('DOMContentLoaded'), function(){
  const form = document.getElementById("calc-form");
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const amountInput = document.querySelector('#loan-amount').value;
        const yearsInput = document.querySelector('#loan-years').value;
        const rateInput = document.querySelector('#loan-rate').value;
        const values = { amount: 15000, years: 12, rate: 6.8}


        const amountEl = document.createElement("loan-amount");
        const yearsEl = document.createElement("loan-years");
        const rateEl = document.createElement("loan-rate");

        amountEl.value = values.amount;
        yearsEl.value = values.amount;
        rateEl.value = values.rate;   

    });


function calculateMonthlyPayment(values) {
    const monthlyRate = (values.rate / 100) / 12;
    const n = Math.floor(values.years * 12);
    return (
        (monthlyRate * values.amount) /
        (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyEl = document.createElement('monthly-payment');
    return
    monthlyEl.innerText = "$" + monthly;
}

