const notes = document.querySelector(".notes")
const addNote = document.querySelector(".add-note")

function createNote(title, text){
    const noteElement = document.createElement("div")
    noteElement.classList.add("note")
    noteElement.innerHTML = `
    <div class="note-header">
        <p class="note-title">${title}</p>
    <div>
        <button class="btn-edit">/</button>
        <button class="btn-delete">x</button>
    </div>
    </div>
    <p class="note-text">${text}</p>`

    const deleteBtn = noteElement.querySelector(".btn-delete")
    const editBtn = noteElement.querySelector(".btn-edit")

    deleteBtn.addEventListener('click', ()=>{
        noteElement.remove()
    })

    return noteElement
}   
addNote.addEventListener('click', () =>{
    const element = createNote("Заголовок", "Ваш текст")
    notes.appendChild(element)
})