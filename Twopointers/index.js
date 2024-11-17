let boxs = [];
const def = "#5BC0F8", chng = "#FB2576", finished = "red", selected = "yellow", green = "#16FF00";
window.onload = setup();
async function setup() {
    let b = document.getElementById("boxs");
    let d = document.getElementById("delay");
    document.getElementById("b").innerText = b.value;
    document.getElementById("d").innerText = d.value + "ms";
    if (boxs.length != parseInt(b.value)) {
        generatebox(parseInt(b.value));
    }
}
function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function reset() {
    location.reload();
}
function Disable_The_Input() {
    let x = document.getElementsByClassName("icon");
    for (let i = 0; i < x.length; i++)
        x[i].disabled = true;
    return parseInt(document.getElementById("delay").value);
}


function generatebox(n = -1) {
    boxs = [];
    let container = document.getElementById("container");
    n = n < 0 ? Math.random() * 20 : n;
    for (let i = 0; i < n; i++) {
        boxs.push('<div class="box" id="' + (i) + '"">' + (i+1) + '</div>');
    }
    container.innerHTML = boxs.join('');
}




// Target sum
// ==========================================================================================
// ==========================================================================================
async function Target() {
    let i = 0, j = boxs.length - 1, k = parseInt(document.getElementById("target").value);
    let delay = Disable_The_Input();
    while (i <= j) {
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        let right = boxs[j].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        const last_id = document.getElementById(right);
        curr_id.style.backgroundColor = selected;
        last_id.style.backgroundColor = selected;
        left = parseInt(curr_id.innerText);
        right = parseInt(last_id.innerText);
        if ((left + right) == k) {
            await Sleep(delay / 5.0);
            curr_id.style.backgroundColor = green;
            last_id.style.backgroundColor = green;
            break;
        }
        else if (left + right < k) {
            i++;
        }
        else {
            j--;
        }
        await Sleep(delay / 5.0);
        curr_id.style.backgroundColor = def;
        last_id.style.backgroundColor = def;
    }
    if (i > j) {
       alert("Target Not Found");
    }
}





// Reverse of an Array
// ========================================================================================
// ========================================================================================
async function Reverse() {
    let i = 0, j = boxs.length - 1;
    let delay = Disable_The_Input();
    while (i <= j) {
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        let right = boxs[j].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        const last_id = document.getElementById(right);
        curr_id.style.backgroundColor = selected;
        last_id.style.backgroundColor = selected;
        const temp = curr_id.innerText;
        await Sleep(delay / 5.0);
        curr_id.innerText= last_id.innerText;
        last_id.innerText = temp;
        curr_id.style.backgroundColor = chng;
        last_id.style.backgroundColor = chng;
        i++;
        j--;
        await Sleep(delay / 5.0);
    }
}

