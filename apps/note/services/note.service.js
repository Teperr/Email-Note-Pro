// note service
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query, // LIST
    get, // READ
    remove, // REMOVE
    save, // 
    getEmptyNote,
    getDefaultFilter,
    getSpeedStats,
    getVendorStats,
    getFilterFromSearchParams
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
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

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            note = _setNextPrevNoteId(note)
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

function getEmptyNote(id = '', title = '', description = '', listPrice = { amount: 0, currencyCode: 0 }, pageCount = '') {
    return { id, title, description, listPrice, pageCount }
}