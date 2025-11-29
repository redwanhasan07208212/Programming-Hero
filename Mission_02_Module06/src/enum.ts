enum UserRoles {
  ADMIN = "admin",
  EDITOR = "editor",
  VIEWER = "viewer",
}
const canEdit = (role: UserRoles) => {
  if (role === UserRoles.ADMIN || role === UserRoles.EDITOR) {
    return true;
  }
  return false;
};
console.log(canEdit(UserRoles.ADMIN));
