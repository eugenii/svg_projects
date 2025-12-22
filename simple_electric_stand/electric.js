
console.log("electric.js ran")
U0_element = document.getElementById("U0").innerHTML = U0;
Rp_element = document.getElementById("Rp").innerHTML = Rp;
function val_up(id, val, val_values) {
    let i = val_values.indexOf(val);
    console.log("up", val_values, `current _val=${val}`, `index=${i}`);
    if (i === val_values.length - 1) {
        i = val_values.length - 2;
    } 
    let newValue = val_values[(i + 1) % val_values.length];
    console.log(`new value=${newValue}`);
    document.getElementById(id).innerHTML = newValue;
    console.log(`innerHTML of ${id}`, document.getElementById(id).innerHTML);
    return newValue;
}
function val_down(id, val, val_values) {
    let i = val_values.indexOf(val);
    console.log("down", val_values, `current _val=${val}`, `index=${i}`);
    if (i === 0) {
        i = 0;
    } else {
        i--;
    }
    let newValue = val_values[(i) % val_values.length];
    console.log(`new value=${newValue}`);
    element = document.getElementById(id).innerHTML = newValue;
    console.log(`innerHTML of ${id}`, document.getElementById(id).innerHTML);
    return newValue;
}