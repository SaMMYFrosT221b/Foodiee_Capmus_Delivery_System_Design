import {createShopkeeper, getShopkeeper, getShopkeepers} from "../database/shopkeeper_controllers.js";


const handlerShopkeeperGetRequest = async(req,res) =>{
    console.log("This is from Shopkeeper Handler");
    const allShopkeepers = await getShopkeepers();
    res.send(allShopkeepers);
}

export default handlerShopkeeperGetRequest;