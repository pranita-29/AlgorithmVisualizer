// const ele=document.querySelector('ul');
// //to create numbers on the screen
// for(let i=0;i<1000;i++){
// const li = document.createElement('li');
// var button = document.createElement('BUTTON');
// button.style.height='50px';
// button.style.width='50px';
// button.style.backgroundColor="orange";
// button.style.color="white";
// button.style.margin='0 5px 5px 5px';
// var text = document.createTextNode(Math.floor(Math.random()*100)+1);
// button.appendChild(text);
// li.appendChild(button);
// ele.append(li);
// }


let boxs=[];
const def = "#5BC0F8", chng = "#FB2576", finished = "red", selected = "yellow", green ="#16FF00";
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
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++)
        x[i].disabled = true;
    return parseInt(document.getElementById("delay").value);
}


function generatebox(n=-1){
    boxs=[];
let container=document.getElementById("container");
    n = n < 0 ? Math.random() * 20 : n;
 for(let i=0;i<n;i++){
     boxs.push('<div class="box" id="' + (i+1) + '"">'+(i)+'</div>');
 }
  container.innerHTML=boxs.join('');
}




// Target sum
// ==========================================================================================
// ==========================================================================================
async function Target(){
let i = 0, j = boxs.length - 1, k =parseInt(document.getElementById("target").value);
 let delay=Disable_The_Input();
  while(i<=j){
      await Sleep(delay / 5.0);
      let left = boxs[i].split('id="')[1].split('"')[0];
      let right = boxs[j].split('id="')[1].split('"')[0];
      const curr_id=document.getElementById(left);
      const last_id=document.getElementById(right);
      curr_id.style.backgroundColor = selected;
      last_id.style.backgroundColor = selected;
      left=parseInt(left);
      right=parseInt(right);
      if((left+right)==k){
          await Sleep(delay / 5.0);
          curr_id.style.backgroundColor = finished;
          last_id.style.backgroundColor = finished;
          break;
      }
      else if(left+right<k){
        i++;
      }
       else{
        j--;
       }
      await Sleep(delay / 5.0);
      curr_id.style.backgroundColor = def;
      last_id.style.backgroundColor = def;
  }
  if(i>j){

  }
}





// Reverse of an Array
// ========================================================================================
// ========================================================================================
async function Reverse(){
    let i=0,j=boxs.length-1;
    let delay = Disable_The_Input();
    while(i<=j){
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        let right = boxs[j].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        const last_id = document.getElementById(right);
        curr_id.style.backgroundColor = selected;
        last_id.style.backgroundColor = selected;
        const temp=left;
        await Sleep(delay / 5.0);
        document.getElementById(left).innerText=right;
        document.getElementById(right).innerText = temp;
        curr_id.style.backgroundColor = chng;
        last_id.style.backgroundColor = chng;
        i++;
        j--;
        await Sleep(delay / 5.0);
    }
}


// Sliding Window Algorithm
// ==========================================================================================
// ===========================================================================================
async function Slidingwindow(){
    let i = 0, j = 0, n = boxs.length, sum = parseInt(document.getElementById("target").value), k = parseInt(document.getElementById("size").value);
    let temp=0;
    let delay = Disable_The_Input();
    while(j<n){
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        let right = boxs[j].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        const last_id = document.getElementById(right);
        temp += parseInt(last_id.innerText);
        last_id.style.backgroundColor = selected;
        if((j-i+1)<k){
            await Sleep(delay / 5.0);
            j++;
        }
        else{
            await Sleep(delay / 5.0);
            for(let p=i;p<=j;p++){
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = finished;
            }
            if(temp==sum){
                for (let p = i; p <= j; p++) {
                    let left = boxs[p].split('id="')[1].split('"')[0];
                    const curr_id = document.getElementById(left);
                    curr_id.style.backgroundColor = green;
                }
                temp=-1;
                break;
            }
            else{
                await Sleep(delay / 5.0);
                let left = boxs[i].split('id="')[1].split('"')[0];
                let right = boxs[j].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                const last_id = document.getElementById(right);
                last_id.style.backgroundColor = finished;
                curr_id.style.backgroundColor = def;
                temp-= parseInt(curr_id.innerText);
                i++;
                j++;
            }
        }
        await Sleep(delay / 5.0);
    }
    await Sleep(delay / 5.0);
    if(temp!=-1){
    while(i<n){
        await Sleep(delay / 5.0);
        let left = boxs[i].split('id="')[1].split('"')[0];
        const curr_id = document.getElementById(left);
        curr_id.style.backgroundColor = def;
        i++;
    }
}
}




//Variable size sliding Window
// =========================================================================================
// =========================================================================================
async function vslidingwindow(){
    let i = 0, j = 0,n=boxs.length, sum = parseInt(document.getElementById("target").value);
    let temp=0;
    let delay = Disable_The_Input();
    while(j<n){
        await Sleep(delay / 5.0);
        let right = boxs[j].split('id="')[1].split('"')[0];
        const last_id = document.getElementById(right); 
        last_id.style.backgroundColor=selected;
        temp+=parseInt(last_id.innerText);
        if(temp==sum){
            await Sleep(delay / 5.0);
            for (let p = i; p <= j; p++) {
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = green;
            }
            temp=-1;
            break;
        }
        else if(temp<sum){
          j++;
        }
        else{
            await Sleep(delay / 5.0);
            for (let p = i; p <= j; p++) {
                let left = boxs[p].split('id="')[1].split('"')[0];
                const curr_id = document.getElementById(left);
                curr_id.style.backgroundColor = finished;
            }
            await Sleep(delay / 5.0);
            while(temp>sum && i<j){
                let left = boxs[i].split('id="')[1].split('"')[0];
                document.getElementById(left).style.backgroundColor = def;
                temp-=parseInt(document.getElementById(left).innerText);
                i++;
            }
            if(temp==sum){
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
    if(temp!=-1){
        while (i < n) {
            await Sleep(delay / 5.0);
            await Sleep(delay / 5.0);
            let left = boxs[i].split('id="')[1].split('"')[0];
            const curr_id = document.getElementById(left);
            curr_id.style.backgroundColor = def;
            i++;
        }  
    }
}




// sieve of Erathosnes
// =============================================================================================================
// ================================================================================================================
async function sieveAlgo(){
    document.getElementById(boxs[0].split('id="')[1].split('"')[0]).style.backgroundColor=finished;
    document.getElementById(boxs[1].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
    document.getElementById(boxs[2].split('id="')[1].split('"')[0]).style.backgroundColor = green;
    let n=boxs.length;
    let delay = Disable_The_Input();
    await Sleep(delay / 5.0);
    for(let i=2;(i*i)<n;i++){
        await Sleep(delay / 5.0);
        if (document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor!=finished){
            await Sleep(delay / 5.0);
            document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = green;
            for(let j=(i*i);j<n;j+=i){
                await Sleep(delay / 5.0);
                if(j%i==0){
                    await Sleep(delay / 5.0);
                    document.getElementById(boxs[j].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
                }
                await Sleep(delay / 5.0);
            }
            await Sleep(delay / 5.0);
        }
        await Sleep(delay / 5.0);
    }
    for(let i=0;i<n;i++){
        if (document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor != finished) {
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor =green;
    }
}
}



//binary search
// ====================================================================
// ====================================================================
async function Binarysearch(){
    let i = 0, j = boxs.length - 1, k = parseInt(document.getElementById("target").value);
    let delay = Disable_The_Input();
    while(i<=j){
        await Sleep(delay / 5.0);
        let mid=parseInt((i+j)/2);
     document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
     document.getElementById(boxs[j].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
     document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).style.backgroundColor = green;
        await Sleep(delay / 5.0);
        if (parseInt(document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).innerText)==k){
            // await Sleep(delay / 5.0);
            document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).style.backgroundcolor=green;
           k=-1;
           break;
        }
        else if (parseInt(document.getElementById(boxs[mid].split('id="')[1].split('"')[0]).innerText)<k){
            await Sleep(delay / 5.0);
            for(let p=i;p<=mid;p++){
                document.getElementById(boxs[p].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
            }
            await Sleep(delay / 5.0);
             i=mid+1;
        }
        else{
            await Sleep(delay / 5.0);
            for (let p = j; p>=mid; p--) {
                document.getElementById(boxs[p].split('id="')[1].split('"')[0]).style.backgroundColor = finished;
            }
            await Sleep(delay / 5.0);
            j=mid-1;
        }
        await Sleep(delay / 5.0);
    }
    await Sleep(delay / 5.0);
    if(k!=-1){
        await Sleep(delay / 5.0);
        alert("element not found");
    }
}
// Linear search
// ===========================================================================================
// ===============================================================================================
async function Linearsearch(){
    let delay = Disable_The_Input();
    let n = boxs.length, k = parseInt(document.getElementById("target").value);
    await Sleep(delay / 5.0);
    for(let i=0;i<n;i++){
        await Sleep(delay / 5.0);
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
        if (parseInt(document.getElementById(boxs[i].split('id="')[1].split('"')[0]).innerText)==k){
            await Sleep(delay / 5.0);
            document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = green;
            k=-1;
            break;
        }
        await Sleep(delay / 5.0);
        document.getElementById(boxs[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
    }
    await Sleep(delay / 5.0);
    if(k!=-1){
        await Sleep(delay / 5.0);
        alert("Element Not Found");
    }
}