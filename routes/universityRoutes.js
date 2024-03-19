import { addUniversity, getUniversity } from "../controllers/universityController.js";

const universityRoute = (app) =>{
   app.route('/universities')
   .post(addUniversity)
   .get(getUniversity)
}
export default universityRoute;