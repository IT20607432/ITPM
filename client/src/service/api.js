import axios from 'axios';

const URL = 'http://localhost:8000';

export const addContact = async (data) => {
    try {
      return await axios.post(`${URL}/contact`,data)
        
    } catch (error) {
        console.log('Error while calling Contact API',error);
        
    }

}


export const regPatient = async(data) => {
  try {
    return await axios.post(`${URL}/signup`,data)
    
  } catch (error) {

    console.log('Error While Calling Register Patient API',error)
    
  }
}

export const logPatient = async(data) => {
  try {
    return await axios.post(`${URL}/login`,data);

  } catch (error) {

    console.log('Error While Calling Login API',error)
    
  }
}



