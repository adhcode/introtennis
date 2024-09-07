/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  
  
  declare interface enrollTraineeParams {
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
  
  

  
  