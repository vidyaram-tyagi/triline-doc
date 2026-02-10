export const getSession = () => {
  if (typeof window === "undefined") return null;

  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  if (!name || !role) return null;
  return { name, role };
};

export const login = (user) => {
  localStorage.setItem("name", user.name);
  localStorage.setItem("role", user.role);
};

export const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("role");
};
