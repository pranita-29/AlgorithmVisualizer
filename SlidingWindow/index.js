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
    let x = document.getElementsByTagName("icon");
    for (let i = 0; i < x.length; i++)
        x[i].disabled = true;
    return parseInt(document.getElementById("delay").value);
}
function generatebox(n = -1) {
    boxs = [];
    let container = document.getElementById("container");
    n = n < 0 ? Math.random() * 20 : n;
    for (let i = 0; i < n; i++) {
        boxs.push('<div class="box" id="' + (i + 1) + '"">' + (i) + '</div>');
    }
    container.innerHTML = boxs.join('');
}


// Sliding Window Algorithm
// ==========================================================================================
// ===========================================================================================
async function Slidingwindow() {
    let i = 0, j = 0, n = boxs.length, sum = parseInt(document.getElementById("target").value), k = parseInt(document.getElementById("size").value);
    let temp = 0;
    let delay = Disable_The_Input();
    while (j < n) {
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        let right = boxs[j].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        const last_id = document.getElementById(right);
        temp += parseInt(last_id.innerText);
        last_id.style.backgroundColor = selected;
        if ((j - i + 1) < k) {
            await Sleep(delay / 5.0);
            j++;
        }
        else {
            await Sleep(delay / 5.0);
            for (let p = i; p <= j; p++) {
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = finished;
            }
            if (temp == sum) {
                for (let p = i; p <= j; p++) {
                    let left = boxs[p].split('id="')[1].split('"')[0];
                    const curr_id = document.getElementById(left);
                    curr_id.style.backgroundColor = green;
                }
                temp = -1;
                break;
            }
            else {
                await Sleep(delay / 5.0);
                let left = boxs[i].split('id="')[1].split('"')[0];
                let right = boxs[j].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                const last_id = document.getElementById(right);
                last_id.style.backgroundColor = finished;
                curr_id.style.backgroundColor = def;
                temp -= parseInt(curr_id.innerText);
                i++;
                j++;
            }
        }
        await Sleep(delay / 5.0);
    }
    await Sleep(delay / 5.0);
    if (temp != -1) {
        while (i < n) {
            await Sleep(delay / 5.0);
            let left = boxs[i].split('id="')[1].split('"')[0];
            const curr_id = document.getElementById(left);
            curr_id.style.backgroundColor = def;
            i++;
        }
        alert("Target Not Found");
    }
}




//Variable size sliding Window
// =========================================================================================
// =========================================================================================
async function vslidingwindow() {
    let i = 0, j = 0, n = boxs.length, sum = parseInt(document.getElementById("target").value);
    let temp = 0;
    let delay = Disable_The_Input();
    while (j < n) {
        await Sleep(delay / 5.0);
        let right = boxs[j].split('id="')[1].split('"')[0];
        const last_id = document.getElementById(right);
        last_id.style.backgroundColor = selected;
        temp += parseInt(last_id.innerText);
        if (temp == sum) {
            await Sleep(delay / 5.0);
            for (let p = i; p <= j; p++) {
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = green;
            }
            temp = -1;
            break;
        }
        else if (temp < sum) {
            j++;
        }
        else {
            await Sleep(delay / 5.0);
            for (let p = i; p <= j; p++) {
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = finished;
            }
            await Sleep(delay / 5.0);
            while (temp > sum && i < j) {
                let left = boxs[i].split('id="')[1].split('"')[0];
                document.getElementById(left).style.backgroundColor = def;
                temp -= parseInt(document.getElementById(left).innerText);
                i++;
            }
            if (temp == sum) {
                await Sleep(delay / 5.0);
                for (let p = i; p <= j; p++) {
                    let left = boxs[p].split('id="')[1].split('"')[0];
                    const curr_id = document.getElementById(left);
                    curr_id.style.backgroundColor = green;
                }
                temp = -1;
                break;
            }
            j++;
        }
    }
    await Sleep(delay / 5.0);
    if (temp != -1) {
        while (i < n) {
            await Sleep(delay / 5.0);
            await Sleep(delay / 5.0);
            let left = boxs[i].split('id="')[1].split('"')[0];
            const curr_id = document.getElementById(left);
            curr_id.style.backgroundColor = def;
            i++;
        }
        alert("Target Not Found");
    }
}



