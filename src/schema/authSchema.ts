import Joi from "joi";

interface TypeSignIn {
  email: string;
  password: string;
}

interface TypeSignUp extends TypeSignIn {
  firstName: string;
  lastName: string;
  username: string;
  profilePicture: string;
}

const signIn = Joi.object<TypeSignIn>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signUp = Joi.object<TypeSignUp>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  profilePicture: Joi.string().required(),
});

export default { signIn, signUp };
