export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};
export const login = () => {
  return localStorage.setItem("auth", "true");
};
export const logout = () => {
  return localStorage.removeItem("auth");
};
