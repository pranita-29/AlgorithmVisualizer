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
        boxs.push('<div class="box" id="' + (i + 1) + '"">' + (i) + '</div>');
    }
    container.innerHTML = boxs.join('');
}


//binary search
// ====================================================================
// ====================================================================
async function Binarysearch() {
    let i = 0, j = boxs.length - 1, k = parseInt(document.getElementById("target").value);
    let delay = Disable_The_Input();
    await Sleep(delay / 5.0);
    while (i <= j) {
        await Sleep(delay / 5.0);
        let mid = parseInt((i + j) / 2);
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
        await Sleep(delay / 5.0);
        document.getElementById(boxs[j].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
        document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).style.backgroundColor = green;
        await Sleep(delay / 5.0);
        await Sleep(delay / 5.0);
        if (parseInt(document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).innerText) == k) {
            // await Sleep(delay / 5.0);
            document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).style.backgroundcolor = green;
            k = -1;
            await Sleep(delay / 5.0);
            break;
        }
        else if (parseInt(document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).innerText) < k) {
            await Sleep(delay / 5.0);
            await Sleep(delay / 5.0);
            for (let p = i; p <= mid; p++) {
                await Sleep(delay / 5.0);
                document.getElementById(boxs[p].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
            }
            await Sleep(delay / 5.0);
            i = mid + 1;
            await Sleep(delay / 5.0);
        }
        else {
            await Sleep(delay / 5.0);
            for (let p = j; p >= mid; p--) {
                await Sleep(delay / 5.0);
                document.getElementById(boxs[p].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
                await Sleep(delay / 5.0); 
            }
            await Sleep(delay / 5.0);
            j = mid - 1;
        }
        await Sleep(delay / 5.0);
        await Sleep(delay / 5.0);
    }
    await Sleep(delay / 5.0);
    if (k != -1) {
        await Sleep(delay / 5.0);
        alert("Target Not Found");
    }
}


// Linear search
// ===========================================================================================
// ===============================================================================================
async function Linearsearch() {
    let delay = Disable_The_Input();
    let n = boxs.length, k = parseInt(document.getElementById("target").value);
    await Sleep(delay / 5.0);
    for (let i = 0; i < n; i++) {
        await Sleep(delay / 5.0);
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
        if (parseInt(document.getElementById(boxs[i].split('id="')[1].split('"')[0]).innerText) == k) {
            await Sleep(delay / 5.0);
            document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = green;
            k = -1;
            break;
        }
        await Sleep(delay / 5.0);
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
    }
    await Sleep(delay / 5.0);
    if (k != -1) {
        await Sleep(delay / 5.0);
        alert("Target Not Found");
    }
}