// mail service
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const loggedinUser = { 
    email: 'IdanElfasi60167@gmail.com',  
    fullname: 'Idan Elfasi' 
    }

const MAIL_KEY = 'mailDB'
_createMails()
export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
}
// For Debug (easy access from console):
window.ms = mailService


function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {

            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, 'i')
                mails = mails.filter(mail => regExp.test(mail.title))
            }

            if (filterBy.price) {
                mails = mails.filter(mail => mail.listPrice.amount >= filterBy.price)
            }

            return mails
        })
}



function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            mail = _setNextPrevmailId(mail)
            return mail
        })
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    console.log(mails);
    if (!mails || !mails.length) {
        mails = []

        for (let i = 0; i < 20; i++) {
            const mail =
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'
            }

            mails.push(mail)
        }
        //    const updateMails= mails.map((mail,idx) => {
        //         mail.prevMail=copyMails[idx-1];
        //         mail.nextMail=copyMails[idx+1];
        //         return mail
        //     });
        utilService.saveToStorage(MAIL_KEY, mails)
        console.log('mails', mails)
    }
}