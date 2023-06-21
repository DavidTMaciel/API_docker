import * as yup from "yup";

export const userValidation = yup.object({

    name: yup.String().required(),
    email: yup.String().required().email(),
    password: yup.String().required().min(6),
    phone: yup.String.nullable(true)

});