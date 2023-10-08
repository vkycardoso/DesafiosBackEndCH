import { usersService } from "../dao/index.js";

export class UsersService{
    static getUserByEmail = async(email)=>{
        return await usersService.getByEmail(email)
    };

    static saveUser = async(newUser)=>{
        return await usersService.save(newUser)
    };

    static getUserByID = async(id)=>{
        return await usersService.getById(id);
    };
}