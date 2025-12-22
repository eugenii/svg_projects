
console.log("electric.js ran")
U0_element = document.getElementById("U0").innerHTML = U0;
function val_up(id, val, val_values) {
    let i = val_values.indexOf(val);
    console.log("1", val_values, val, i);
    let newValue = val_values[(i + 1) % val_values.length];
    console.log(newValue);
    document.getElementById(id).innerHTML = newValue;
    console.log("2", document.getElementById(id).innerHTML);
    return newValue;
}
function U0_down() {
    i = U0_values.indexOf(U0);
    console.log("U0 downed", U0_values, i);
    if (i === 0) {
        i = U0_values.length - 1;
    } else {
        i--;
    }
    U0 = U0_values[(i) % U0_values.length];
    U0_element = document.getElementById("U0").innerHTML = U0;
}