export interface User {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      buildingCode: string;
    }
    
    const users: User[] = [
      {
        firstName: 'Faraz',
        lastName: 'Qureshi',
        email: 'faraz525@uw.edu',
        password: 'password1',
        buildingCode: 'willow'
      },
      {
        firstName: 'Akriti',
        lastName: 'Shrivastava',
        email: 'akritish@uw.edu',
        password: 'password2',
        buildingCode: 'maple'
      },
      {
        firstName: 'Clarissa',
        lastName: 'Choe',
        email: 'choe7@uw.edu',
        password: 'password3',
        buildingCode: 'mccarty'
      },
      {
        firstName: 'Zephyr',
        lastName: 'Tao',
        email: 'zephtao@uw.edu',
        password: 'password4',
        buildingCode: 'elm'
      },
    ];
    
    export const getUsers = () => users;
    
    export const getUser = (email: string) => users.find(u => u.email === email);