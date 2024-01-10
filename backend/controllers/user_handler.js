import { createUser, getUsers, getUser, checkUser } from "../database/user_controllers.js";


const handlerUserGetRequest =  async(req,res) =>{
    console.log("This is from User Handler");
    const allUSers = await getUsers();
    res.send(allUSers);
}

export default handlerUserGetRequest;