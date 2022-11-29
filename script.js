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
    if (Number(formValue.value)=== randonNumber) {
        box1.classList.toggle('hide')
        box2.classList.toggle('hide')
        title.innerText=`o numero secreto é ${randonNumber}` 
    }
    else{
        description.innerText='errou ! tente novamente'
        formValue.value=""
    }    

    vezesExect++
    descriptionFinish.innerText=`você tentou ${vezesExect} vezes`
}

function resetInfo(name) {
    name.preventDefault()
    box1.classList.toggle('hide')
    box2.classList.toggle('hide')
    vezesExect=''
    formValue.value=''
    randonNumber=''
    description.innerText='Escolha um numero de 0 a 9'
}

