let allInput = document.querySelectorAll('.input100');
let hasilBox = document.querySelector('.hasil-box');

for(let i = 0; i < allInput.length; i++){
    allInput[i].addEventListener('keyup', (e)=>{
        if(allInput[i].value != ''){
            allInput[i].classList.add('has-val');
        }

        else{
            allInput[i].classList.remove('has-val');
        }
    });
}

function factorial(x){
    let res = 1n;
    for(let i = 2; i <= x; i++) res *= BigInt(i);
    return res;
}

function c(x, y){
    let a = factorial(x);
    let b = factorial(x-y);
    let cc = factorial(y);
    let result = BigInt(a/b/cc);
    return result;
}

document.addEventListener('submit', (e)=>{
    hasilBox.innerHTML = '';
    hasil.style.flex = '1.5';
    let baris = allInput[0].value;
    let kolom = allInput[1].value;
    let orang = allInput[2].value;
    let total = baris*kolom;

    let fil = document.createElement('div');
    fil.style.display = 'flex';
    fil.style.alignItems = 'center';
    fil.style.justifyContent = 'center';
    fil.style.gap = `10px`;

    let p = document.createElement('div');
    p.classList.add("posisi");
    p.textContent = " ";
    fil.appendChild(p);
    for(let i = 0; i < kolom; i++){
        p = document.createElement('div');
        p.classList.add("posisi");
        p.textContent = `${i+1}`;
        fil.appendChild(p);
    }

    hasilBox.appendChild(fil);

    for(let i = 0; i < baris; i++){
        fil = document.createElement('div');
        fil.style.display = 'flex';
        fil.style.alignItems = 'center';
        fil.style.justifyContent = 'center';
        fil.style.gap = `10px`;
        let pos = document.createElement('div');
        pos.classList.add("posisi");
        pos.textContent = `${String.fromCharCode(65+i)}`;

        fil.appendChild(pos);
        fil.classList.add("sep");
        for(let j = 0; j < kolom; j++){
            pos = document.createElement('div');
            pos.classList.add("seat");
            
            fil.appendChild(pos);
        }

        hasilBox.appendChild(fil);
    }


    hasilBox.innerHTML += '<div class="result" style="height: 100px"></div>';

    let r = document.querySelectorAll('.hasil-box .seat');     

    let test = setInterval(function(){
        let ar = Math.floor(Math.random() * (baris-1)) + 1;
        let br = Math.floor(Math.random() * (kolom-1)) + 1;
        let res = Math.floor((ar-1)*kolom+br);
        console.log(res);
        if(res < r.length){
            r[res].style.backgroundColor = 'green';
        }
        setTimeout(
            function(){
                r[res].style.backgroundColor = 'red';
            }
            , 50
        );
    }, 50);

    setTimeout(()=>{
        clearInterval(test);
        let f = document.querySelectorAll('.sep');
        let final = document.createElement('div');
        let ress = document.querySelector('.result');
        ress.style.flexDirection = `column`;
        ress.style.fontSize = `37px`;
        ress.innerHTML = `<div>Hasil perhitungan = ${c(baris*kolom, orang)}</div>`;
    }, 2000);


});