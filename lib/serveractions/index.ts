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
//insert into the table
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
//laundry status
  const fetchStatus = async (bg:any) => {
    const { data, error } = await supabase
        .from('LaundryDetails')
        .select('status')
        .eq('bag_number' ,bg)
        .single()
    
    if (error) {
        console.error('Supabase error:', error.message);
        return null;
    }
    
    return data;
    
    
};


    const fetchuserdetails = async (email:string) =>{
      
        const {data , error} = await supabase
        .from('StudentDetails')
        .select()
        .eq('email' , email)
         
        if (error) {
          console.error('Supabase error:', error.message);
          return null
        }
        console.log("fetched");
        console.log(data);
        
        return data;
      
      
    }
  export {fetchuserdetails};
  
  export {Fetch};
  export {fetchStatus};