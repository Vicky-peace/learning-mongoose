import mongoose from 'mongoose';
import { UniversitySchema } from '../models/crm.Models.js';
const University = mongoose.model("University", UniversitySchema);


export const addUniversity = (req,res) =>{
   let newUniversity = new University(req.body);
   newUniversity.save()
   .then(contact => {
    res.json(contact);
   })
   .catch(err => {
    res.status(500).json({error: err.message});
   });
};