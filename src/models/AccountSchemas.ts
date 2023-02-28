import joi from 'joi';

const validaNewAccount = joi.object({
    id: joi.number()
            .integer()
            .min(1),
    nome: joi.string()
             .min(3)
             .max(150)
             .required(),
    email: joi.string()
              .email()
              .min(8)
              .max(150)
              .required(),
    password: joi.string()
                 .min(6)
                 .max(150)
                 .required(),
    status: joi.number()
               .integer()
               .min(100)
               .max(500),
    clubeFavorito: joi.number()
                      .integer()
});

export { validaNewAccount }