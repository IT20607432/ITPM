
import Patient from '../schema/regPatient-schema.js';


export const registerP = async (request,response) => {
    const patient = request.body;

    const newPatient = new Patient(patient);

    try {
        await newPatient.save();
        response.status(202).json(newPatient);
        
    } catch (error) {
        response.status(408).json({message: error.message});
        
    }

}

export const loginPatient = async (request, response) => {
  const { username, password } = request.body;

  try {
    const patient = await Patient.findOne({ username, password });
    if (!patient) {
      response.status(404).json({ message: "Invalid username or password" });
      return;
    }
    response.status(200).json(patient);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}


