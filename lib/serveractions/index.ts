// data updation logic.

"use server"
import { supabase } from "../../supabase";

interface detailparams{
    student_id : Number,
    regnumber : string,
    Name : string,
    email :string,
    submissionday : string,
    bag_number : string
}
const  Fetch  = async  ({student_id , regnumber , Name , email , submissionday , bag_number}:detailparams ) => {
    const response = await supabase
    .from('StudentDetails')
    .insert([{ student_id ,  regnumber , Name , email , submissionday , bag_number }])
    .select()

    if(response.error){
      console.error('error occured' , response.error.message);
      return null;
    }
    else{
      console.log('Updated');
      
    }
  }


  export {Fetch};