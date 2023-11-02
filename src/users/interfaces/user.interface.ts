export interface User {
    //  _id: string;
    username : string,
    _id?:string,
     email: string;
     age: number;
     address: {
      street: string;
      country: string;
      pincode: number;
    };
     phone: string;
     password: string;
  }
