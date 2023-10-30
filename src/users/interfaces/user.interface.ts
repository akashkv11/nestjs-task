export interface User {
    //  _id: string;
     name: string;
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
