import { addUniversity } from "../controllers/universityController.js";

const universityRoute = (app) =>{
   app.route('/universities')
   .post(addUniversity);
}
export default universityRoute;