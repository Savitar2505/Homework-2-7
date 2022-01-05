let input = document.getElementById('input')
let head =document.getElementById('head')
let listBlock=document.getElementById('list')

const getCountry= async ()=>{
    try {
        const data = await fetch('https://restcountries.com/v3.1/name/' + input.value)
        const response = await data.json()
        listBlock.innerHTML = ''
        head.innerText=''
        let list = document.createElement('ul')
        response.forEach(elem => {
            for (let i = 0; i < elem.borders.length; i++) {
                const border = async () => {
                    const data = await fetch('https://restcountries.com/v3.1/alpha/' + elem.borders[i])
                    const response = await data.json()
                    response.forEach(elem => {
                        let name = document.createElement('li')
                        name.innerText = elem.name.common
                        list.append(name)
                    })
                }
                border()
            }
        })
        head.innerText = 'Страна граничит с:'
        listBlock.append(list)
    }
    catch (e) {
        console.log(e)
        alert('Ошибка 404')
    }
}
