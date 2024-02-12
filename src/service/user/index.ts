import axiosinstance from "../../axios";
import { User } from "../../entity/user";

export default class UserService {
    async getUser(): Promise<User> {
        try {
            const response = await axiosinstance.get('api');
            const userInfo =  userTransformer(response.data.results[0]);
            localStorage.setItem('user', JSON.stringify(response.data.results[0]))
            return userInfo
        } catch (error) {
            throw error;
        }
    }
}

const userTransformer = (user: any): User => {
    const theUserInfo = new User(user.name.title, user.name?.first, user.name?.last, user.email);
    if(user.picture?.medium){
        theUserInfo.picture = user.picture?.medium
    }
    return theUserInfo;
}