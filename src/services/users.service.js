

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = () => {
    return fetch(baseUrl)
}

export const getUser = (id) => {
    return fetch(`${baseUrl}/${id}`)
}