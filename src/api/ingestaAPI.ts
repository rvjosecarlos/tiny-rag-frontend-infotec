import { isAxiosError } from "axios";
import { api } from "../lib/ragAPI";
import { ResponseIngestaSchema } from "../schemas/responsesAPI";

export const ingestarDocumento = async (formData: FormData) => {
    try{
        const url = `/api/ingesta`;
        console.log({url});
        const result = await api.post(url, formData);
        const{ data, error } = ResponseIngestaSchema.safeParse(result.data);
        if( error ){
            console.log(`Error al cargar el documento ${error.message}`);
            return { success: false, message: "", errors: [{ message: error.message }], data: null };
        };
        return data;
    }
    catch(error: unknown){
        if(isAxiosError(error)){
            console.log(error);
            return { success: false, message: "", errors: [{ message: error.message }], data: null };
        };
        return { success: false, message: "", errors: [{ message: JSON.stringify(error) }], data: null };
    };
};