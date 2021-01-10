export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "varun@gmail.com" && password === "varun") {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
