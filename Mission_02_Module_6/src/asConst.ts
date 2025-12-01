const userRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof userRoles) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else {
    return false;
  }
};
console.log(canEdit(userRoles.Admin));

const directions = {
  Up: "UP",
  Down: "DOWN",
  Left: "LEFT",
  Right: "RIGHT",
} as const;

const move = (direction: (typeof directions)[keyof typeof directions]) => {
  if (direction === directions.Up) {
    return "Moving Up";
  } else if (direction === directions.Down) {
    return "Moving Down";
  } else if (direction === directions.Left) {
    return "Moving Left";
  } else if (direction === directions.Right) {
    return "Moving Right";
  } else {
    return "Invalid Direction";
  }
};

console.log(move(directions.Left));
