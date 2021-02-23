const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let colorBtn=document.querySelector('.btn-color')
let hexBtn=document.querySelector('.btn-hex')
let generatorBtn=document.querySelector('.btn-color-generator')
let colorName=document.getElementById('colorName')
colorBtn.addEventListener('click',function(){
    this.style.color='aqua'
    colorBtn.classList.add('active')
    hexBtn.classList.remove('active')
    hexBtn.style.color='#000'
})
document.querySelector('.btn-hex').addEventListener('click',function(){
    this.style.color='aqua'
    hexBtn.classList.add('active')
    colorBtn.classList.remove('active')
    colorBtn.style.color='#000'
})
generatorBtn.addEventListener('click',function(){
    if(colorBtn.classList.contains('active')){
        let randomNumber=Math.floor(Math.random()*(255*255*225))
        randomNumber= randomNumber.toString(16)
        document.querySelector('body').style.background='#'+randomNumber
        colorName.innerHTML='#'+randomNumber
        colorName.style.color='#'+randomNumber
        
    }else if(hexBtn.classList.contains('active')){
        let random=Math.floor(Math.random()*(colors.length))
        document.querySelector('body').style.background=colors[random]
        colorName.innerHTML=colors[random]
        olorName.style.color=colors[random]
    }else{
        document.querySelector('body').style.background='#fff'
        colorName.innerHTML=''
        olorName.style.color='#fff'
    }
})


