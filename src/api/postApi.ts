import { instances } from "./instances"



class PostApi {
    getUsers = async() => {
        try {
            const response = await instances.get('/users')
            return response.data
        }catch (e) {
            console.log('Failed to get users', e)
        }
    }
}

export const postApi = new PostApi()