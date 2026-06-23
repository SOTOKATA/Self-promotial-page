
import { type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {

    return {
        
    };
};

export const actions = {

contactForm: async ({ request }) => {
    const formData = await request.formData();
    
    const email = formData.get('email')?.toString();
    const name = formData.get('name')?.toString();
    const message = formData.get('message')?.toString();
    const subject = formData.get('subject')?.toString();
    
    
    if (!email)
        return fail(400, {
            success: false,
            message: 'Incorrect email',
        });
            
    if (!name)
        return fail(400, {
            success: false,
            message: 'Incorrect name',
        });       
            
    if (!message)
        return fail(400, {
            success: false,
            message: 'Incorrect message',
        });
            
    if (!subject)
        return fail(400, {
            success: false,
            message: 'Incorrect subject',
        });
        
    
        
    // Contact form logic
    
    return {
        success: true
    }
},
    
} satisfies Actions;