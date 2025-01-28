const loginUser = async (payload: { email: string; password: string }) => {
  console.log("User logged in...");
  console.log(payload);
};

export const AuthServices = {
  loginUser,
};
