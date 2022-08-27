let dbSimulation = [
  {
    email: "vini@gmail.com",
    password: "123456",
  },
  {
    email: "myEmail@email.com",
    password: "123456",
  },
  {
    email: "email.test@gmail.com",
    password: "123456",
  },
  {
    email: "email.123@outlook.com",
    password: "123456",
  },
  {
    email: "test.login@hotmail.com",
    password: "123456",
  },
];

const signIn = (authData: any) => {
  const findUserinDb = dbSimulation.find(
    (user) =>
      user.email === authData.email && user.password === authData.password
  );
  if (!findUserinDb)
    throw { type: "unauthorized", message: "Invalid credentials" };

  console.log(findUserinDb);
};

export default { signIn };
