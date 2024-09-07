import { Models } from "node-appwrite";

export interface Trainee extends Models.Document {
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    gender: Gender;
    school: String;
    academics: String;
    coach: String;
    ballBouncingYear: String;
    futureGoals: String;
    parentStands: String;
  
}

