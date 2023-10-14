
import { supabase } from '../../../supabase';

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
interface loginprams{
    email:string,
    password:string
}

async function signup({email , password } : loginprams) {
    try{
        const response = await supabase.auth.signUp({ email, password });
        if(response.error){
            console.error('Error in signup' , response.error.message);
        }
        else {
            console.log('Signup successfull');
            
    }
}
    catch(err){
        console.error(err);
    }
    
}
export {signup};
