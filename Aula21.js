const caixa1 = document.querySelector("#caixa1")
const btn_antes = document.querySelector("#btn1")
const btn_depois = document.querySelector("#btn2")
const insert = document.querySelector("#t1")

const cursos = ["HTML","CSS","JavaScript","PHP","React","Bootstrap","NodeJS","Lavarel"]
let indice = 0

const criarNovoCurso=(curso)=>{
    const elementos = document.createElement("div")
    elementos.innerHTML = curso
    elementos.setAttribute("id","a"+(indice+1))
    elementos.setAttribute("class","curso c1")

    const btn_trash = document.createElement("img")
    btn_trash.setAttribute("src","/home/r1/Downloads/trash-red.svg")
    btn_trash.setAttribute("class","icons")
    elementos.appendChild(btn_trash)
        
    btn_trash.addEventListener("click",()=>{
        elementos.remove()
    }) 
    return elementos
}

cursos.map((element)=>{ 
    const novoElemento = criarNovoCurso(element)
    caixa1.appendChild(novoElemento)
    indice++

    const tirarSelecao=()=>{
        const selecionados = [...document.querySelectorAll(".selecionado")]
        selecionados.map((el)=>{
            el.classList.remove("selecionado")
        })
    }

    novoElemento.addEventListener("click",(acionador)=>{
        const el = acionador.target
        tirarSelecao()//Para selecionar apenas um.
        el.classList.toggle("selecionado")
    })
})

const retornaSelecionado=()=>{
    let todosSelecionados = [...document.querySelectorAll(".selecionado")]
    todosSelecionados=todosSelecionados[0]
    return todosSelecionados
}

btn_antes.addEventListener("click",()=>{
    const cs = retornaSelecionado()
    const curso_selecionado = cs
    const novoElemento = criarNovoCurso(insert.value)//Pegando o nome do insert
    //Insere antes de um elelmento especificado.
    caixa1.insertBefore(novoElemento,curso_selecionado)//(quem vou colocar, atrás de quem)
})

btn_depois.addEventListener("click",()=>{
    const cs = retornaSelecionado()
    const curso_selecionado = cs
    const novoElemento = criarNovoCurso(insert.value)
    caixa1.insertBefore(novoElemento,curso_selecionado.nextSibling)
    //Adicionando antes do próximo irmão, já que não tem insertAfter
})
