const panels = document.querySelectorAll('.panel')

function toggleOpen()
{
    this.classList.toggle('open');
    this.childNodes[3].classList.toggle('addMiddleNote')
    
}
panels.forEach(panel => panel.addEventListener('click' , toggleOpen))

function showTexts(e){
    // headText.classList.toggle('.addHead')
    // lowerText.classList.toogle('.addFoot')
    if(e.propertyName.includes('flex-grow'))
    {
        console.log(this.classList[2])
        const headText = document.querySelector(`.${this.classList[1]}`)
        headText.firstChild.nextSibling.classList.toggle('addHead')
        headText.lastChild.previousSibling.classList.toggle('addFoot')
    }
}



panels.forEach(panel => panel.addEventListener('transitionend',showTexts))

document.querySelector('.btn').addEventListener('click' , () => {
    const screen = document.querySelector('.screen')
    screen.classList.add('screen-collapse')
})