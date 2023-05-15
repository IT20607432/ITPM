import Contact from '../schema/contact-schema.js';


export const addContact = async (request,response) => {
    
    const contact = request.body;

    const newContact = new Contact(contact);

    try {
        await newContact.save();
        response.status(201).json(newContact);
    } catch (error) {
        response.status(409).json({message:error.message});
        
    }
}


// request comes from the frontend to backend
//response comes from backend to frontend