
import { type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {

    return {
        
    };
};

export const actions = {

login: async ({ request }) => {
    const formData = await request.formData();
    
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const saveMe = formData.get('saveMe')?.toString() === 'on';
    
    if (!email || !password)
        return fail(400, {
            success: false,
            message: 'Incorrect email or password',
        });
        
    // Login logic
    
    return {
        success: true
    }
},
    
} satisfies Actions;