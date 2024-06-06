// note service
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query, // LIST
    get, // READ
    remove, // REMOVE
    save, // 
    getEmptyNote,
    bgColorNote,
    // getDefaultFilter,
    // getSpeedStats,
    // getVendorStats,
    // getFilterFromSearchParams
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            console.log('NOTE_KEY :', notes)
            // if (filterBy.title) {
            //     // console.log('filterBy:', filterBy)
            //     const regExp = new RegExp(filterBy.title, 'i')
            //     notes = notes.filter(note => regExp.test(note.title))
            // }

            // if (filterBy.minPrice) {
            //     notes = notes.filter(note => note.listPrice.amount >= filterBy.minPrice)
            // }
            // console.log('notes storageService.query:', notes)
            // console.log('filterBy storageService.query:', filterBy)

            return notes
        })
}


function bgColorNote(noteId, color) {
    console.log('noteId:', noteId)
    console.log('color:', color)
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            note.style.backgroundColor = color
            return save(note)
        })



}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            // note = _setNextPrevNoteId(note)
            return note
        })
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []


        const types = ['text', 'todoList', 'photo', 'video']
        for (let i = 0; i < 6; i++) {
            const type = types[i % types.length]

            const note = {
                id: utilService.makeId(5),
                createdAt: {
                    month: utilService.getMonthName(new Date().getMonth()),
                    day: new Date().getDate(),
                    year: new Date().getFullYear()
                },
                type:'text',
                isPinned: false,
                style: { backgroundColor: '' },
                info: { title: utilService.makeLorem(3), txt: utilService.makeLorem(15) },
                imagesFiles: {},
                isTrash: false,
            }

            notes.push(note)
        }

        utilService.saveToStorage(NOTE_KEY, notes)
        
    }
}


// function _createNote(type) {
//     const note = getEmptyNote(type)
//     note.type = type

//     return note
// }

function getEmptyNote(type = '') {
    return {
        id: utilService.makeId(),

        createdAt: {
            month: utilService.getMonthName(new Date().getMonth()),
            day: new Date().getDate(),
            year: new Date().getFullYear()
        },
        type,
        isPinned: false,
        style: { backgroundColor: '' },
        info: { title: '', txt: '' },
        imagesFiles: {},
        isTrash: false,
    }
}


const notes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    }
]