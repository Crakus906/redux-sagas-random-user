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
export const nationality = (e) => ({type: 'NATIONALITY', payload: e})

export const logout = () => ({type: 'LOGOUT'})

export const linkedIn = () => ({type: 'LINKED_IN'})
export const linkedInRequest = () => ({type: 'LINKED_IN_REQUEST'})
export const linkedInResponse = (data) => ({type: 'LINKED_IN_RESPONSE', payload: data})
export const linkedInReject = () => ({type: 'LINKED_IN_REJECT'})

export const gitHub = () => ({type: 'GITHUB'})
export const gitHubRequest = () => ({type: 'GITHUB_INREQUEST'})
export const gitHubResponse = (data) => ({type: 'GITHUB_IN_RESPONSE', payload: data})
export const gitHubReject = () => ({type: 'GITHUB_IN_REJECT'})