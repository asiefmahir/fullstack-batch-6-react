const baseurl = `http://localhost:4000/notes`;

export const getAllNotes = async () => {
    const response = await fetch(baseurl);
    return await response.json()
}

export const getNoteByID = async (category) => {
    const response = await fetch(`${baseurl}?category=${category}`);
    return await response.json()
}


export const createNote = async (note) => {
    return await fetch(baseurl , {
        headers: {
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(note)
    })
}

export const updateNote = async (note) => {
    return await fetch(`${baseurl/note.id}`, {
        headers : {
            'Content-type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(note)
    })
}

export const removeNote = async (id) => {
    return await fetch(`${baseurl}/${id}`, {
        headers : {
            'Content-type': 'application/json'
        },
        method: "DELETE",
    })
}