export const user = () => ({type: 'USER'})
export const userRequest = () => ({type: 'USER_REQUEST'})
export const userResponse = (data) => ({type: 'USER_RESPONSE', payload: data})
export const userReject = () => ({type: 'USER_REJECT'})

export const contacts = () => ({type: 'CONTACTS'})
export const contactsRequest = () => ({type: 'CONTACTS_REQUEST'})
export const contactsResponse = (data) => ({type: 'CONSTACTS_RESPONSE', payload: data})
export const contactsReject = () => ({type: 'CONTACTS_REJECT'})

export const search = (e) => ({type: 'SEARCH', payload: e})
export const gender = (e) => ({type: 'GENDER', payload: e})