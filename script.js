let btnExect=document.querySelector('#btnExect')
let btnReset=document.querySelector("#btnReset")
let formValue=document.querySelector('#form-value')
let vezesExect=""
let randonNumber=Math.floor(Math.random() *10)
let box1=document.querySelector('.boxOne')
let box2=document.querySelector('.box-2')
let title=document.querySelector('.title-finish')
let descriptionFinish=document.querySelector('.description-finish')
let description=document.querySelector('.description')

btnExect.addEventListener('click', exectVerific)
btnReset.addEventListener('click', resetInfo)
function exectVerific(name) {
    name.preventDefault()
    if (formValue.value=="") {
        alert('entre com um número')
        
        vezesExect=''
    }
    else if (Number(formValue.value)=== randonNumber) {
        box1.classList.toggle('hide')
        box2.classList.toggle('hide')
        title.innerText=`Parabéns o número secreto é ${randonNumber}` 
        vezesExect++
    }
    else{
        description.innerText='Tente novamente um numero de 0 a 9'
        formValue.value=""
        vezesExect++
        
    }    

   
    descriptionFinish.innerText=`você tentou ${vezesExect} vezes`
}

function resetInfo(name) {
    name.preventDefault()
    box1.classList.toggle('hide')
    box2.classList.toggle('hide')
    vezesExect=''
    formValue.value=''
    randonNumber=Math.floor(Math.random() *10)
    description.innerText='Entre um numero de 0 a 9'
    
}

