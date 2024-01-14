let eid = document.getElementById('eid').value;
let date = document.getElementById('dte').value;
let time = document.getElementById('time').value;
let customer= document.getElementById('customer').value;
let brnd= document.getElementById('brnd').value;
let cid = document.getElementById('cid').value;
let eqtype = document.getElementById('eqtype').value;
let stract = document.getElementById('stract').value;
let status = document.getElementById('status').value;

function calsalary(){
    let rate= parseFloat(document.getElementById('rate').value);
    let basic= parseFloat(document.getElementById('basic').value);
    let meal= parseFloat(document.getElementById('meal').value);
    let tot;
    let salary; 
    tot = basic + rate;
    salary = tot - meal;
    parseFloat(document.getElementById('total').value = salary);
}
