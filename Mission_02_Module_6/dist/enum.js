"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["EDITOR"] = "editor";
    UserRoles["VIEWER"] = "viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.ADMIN || role === UserRoles.EDITOR) {
        return true;
    }
    return false;
};
console.log(canEdit(UserRoles.ADMIN));
//# sourceMappingURL=enum.js.map