import { createDeliveryBoy, getDeliveryBoys, getDeliveryBoy} from '../database/deliveryboy_controllers.js';

const handlerDeliveryGetRequest = async(req,res) =>{
    console.log("This is from Delivery Handler");
    const allDeliveryBoys = await getDeliveryBoys();
    res.send(allDeliveryBoys);
}

export default handlerDeliveryGetRequest;