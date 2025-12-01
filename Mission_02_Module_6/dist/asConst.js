"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const canEdit = (role) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
console.log(canEdit(userRoles.Admin));
const directions = {
    Up: "UP",
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT",
};
const move = (direction) => {
    if (direction === directions.Up) {
        return "Moving Up";
    }
    else if (direction === directions.Down) {
        return "Moving Down";
    }
    else if (direction === directions.Left) {
        return "Moving Left";
    }
    else if (direction === directions.Right) {
        return "Moving Right";
    }
    else {
        return "Invalid Direction";
    }
};
console.log(move(directions.Left));
//# sourceMappingURL=asConst.js.map