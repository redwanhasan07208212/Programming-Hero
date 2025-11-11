{
  // union types
  type FrontEndDeveloper = "FakibajDeveloper" | "JuniorDeveloper"; // this is called string literal types
  type BackEndDeveloper = "FrontEndDeveloper" | "ExpertDeveloper"; // this is called string literal types

  const frontEndDeveloper: FrontEndDeveloper = "JuniorDeveloper";
  console.log(frontEndDeveloper);

  type newDeveloper = FrontEndDeveloper | BackEndDeveloper;
  const newDeveloper: newDeveloper = "FakibajDeveloper";

  type User = {
    name: string;
    age: number;
    role: newDeveloper;
    skills: string[];
    gender: "male" | "female";
  };
  const user: User = {
    name: "John Doe",
    age: 30,
    role: "ExpertDeveloper",
    skills: ["JavaScript", "TypeScript", "React"],
    gender: "male",
  };

  // Intersection types
  type FrontEnd = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };
  type BackEnd = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };

  type FullStackDeveloper = FrontEnd & BackEnd;

  const developer: FullStackDeveloper = {
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };
  console.log(developer);
}
