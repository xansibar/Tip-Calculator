var accion = document.getElementById("container");

accion.onchange = function(){
    var bill = document.getElementById("billAmount").value;
    var tip = document.getElementById('rangeTip').value;
    var split = document.getElementById('rangeSplit').value;
    var billEach = bill / split;
    var divTip = bill * (tip/100);
    var tipEach = divTip / split;

    // Instructor's code
    // document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    // document.getElementById('splitOutput').innerHTML = split;
    // document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    // document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);

    document.getElementById("tipOutput").textContent = tip + "%";
    document.getElementById("splitOutput").textContent = split + " foodie(s)";
    document.getElementById("rangeTip").textContent = tip + "%";
    var newBillDisplay = document.getElementById("newBill");
    newBillDisplay.textContent = billEach.toFixed(2);
    var tipAmountDisplay = document.getElementById("newTip");
    tipAmountDisplay.textContent = tipEach.toFixed(2);
}