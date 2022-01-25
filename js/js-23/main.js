const addBtn = document.getElementById("add");

//no textarea, no text

const notes = JSON.parse(localStorage.getItem('notes'))

//if theres notes, store parsed and stored text

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click", () => addNewNote(""));

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    //main : if text is true, have no class, otherwise hidden
    // if textarea class has text , hidden otherwise no class


    //append

    note.innerHTML = `

      <div class="tools">

           <button class="edit">
             <i class="fas fa-edit"></i>
           </button>

           <button class="delete">
             <i class="fas fa-trash-alt"></i>
           </button>

      </div>


      <div class="main ${text ? "" : "hidden"}"></div>

          <textarea class="${text ? "hidden" : ""}"></textarea>

       </div>

    
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked.parse(text);

    deleteBtn.addEventListener("click", () => {
        note.remove();

                //REMOVED items dont reappear when reload
                //remove from local storage

        updateLS();

    });

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener('input' , (event) => {
        const { value } = event.target

        main.innerHTML = marked.parse(value)

        //add notes to local storage

        updateLS()
    })

    document.body.appendChild(note);
}

// localStorage.setItem('name', JSON.stringify())
// JSON.parselocalStorage.getItem('name')

//update the localStorage

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    //create empty array to push notes later
    const notes = []

    notesText.forEach(note => notes.push(note.value))

    // console.log(notes)

    localStorage.setItem('notes' , JSON.stringify(notes))
}