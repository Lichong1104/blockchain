export const mySetToken = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const myGetToken = () => sessionStorage.getItem("token");
export const removeToken = () => sessionStorage.removeItem("token");
export const isLoginEd = () => (myGetToken() ? true : false);
