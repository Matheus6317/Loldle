var inp = document.getElementById('inp')
var but01 = document.getElementById('but01')

var dim = document.querySelector('.dim')

but01.addEventListener('click', ()=>{

    if(inp.value === 'Leona' ){
        document.getElementById('p1').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Lulu'){
        document.getElementById('p2').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Lux' ){
        document.getElementById('p3').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Nami'){
        document.getElementById('p4').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Karma' ){
        document.getElementById('p5').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Milio'){
        document.getElementById('p6').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Alistar' ){
        document.getElementById('p7').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Morgana'){
        document.getElementById('p8').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Rakan' ){
        document.getElementById('p9').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Senna' ){
        document.getElementById('p10').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Rell' ){
        document.getElementById('p11').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Zyra' ){
        document.getElementById('p12').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Bardo' ){
        document.getElementById('p13').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Zilean' ){
        document.getElementById('p14').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Taric' ){
        document.getElementById('p15').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Brand' ){
        document.getElementById('p16').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Banna' ){
        document.getElementById('p17').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Braum' ){
        document.getElementById('p18').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Yuumi' ){
        document.getElementById('p19').textContent = `${inp.value}`
        inp.value = ''
    }
    else if(inp.value === 'Renata Glasc' ){
        document.getElementById('especial').textContent = `${inp.value}`
        inp.value = ''
    }
    else{
        inp.value = ''
    }
   
})
