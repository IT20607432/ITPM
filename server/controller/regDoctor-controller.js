
import Doctor from '../schema/regDoctor-schema.js';

export const registerD = async (request,response) => {
    const doctor = request.body;

    const newDoctor = new Doctor(doctor);

    try {
        await newDoctor.save();
        response.status(205).json(newDoctor);

    } catch (error) {

        response.status(409).json({message : error.message});
        
    }
}

export const loginDoctor = async (request, response) => {
    const {username , password} = request.body;

    try {
        
        const doctor = await Doctor.findOne({username , password});
        if (!doctor) {
            response.status(406).json({message : "Invalud username or Password"});
            return;

    }
    response.status(206).json(doctor);
}
     catch (error) {
        response.status(407).json({message : error.message});   
        
    }
}