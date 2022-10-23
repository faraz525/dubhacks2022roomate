export interface User {
      firstName: string;
      lastName: string;
      subject: string;
      itemNeeded: string;
      needBy: string;
      email: string;
      password: string;
      buildingCode: string;
    }
    
    const users: User[] = [
      {
        firstName: 'Akriti',
        lastName: 'Shrivastava',
        subject: 'not too urgent',
        itemNeeded: 'screwdriver',
        needBy: '11:00pm',
        email: 'akritish@uw.edu',
        password: 'password2',
        buildingCode: 'maple'
      },
      {
        firstName: 'Clarissa',
        lastName: 'Choe',
        subject: 'out of TP :(',
        itemNeeded: 'toilet paper',
        needBy: '4:25pm',
        email: 'choe7@uw.edu',
        password: 'password3',
        buildingCode: 'mccarty'
      },
      {
        firstName: 'Zephyr',
        lastName: 'Tao',
        subject: 'please help!',
        itemNeeded: 'notebook paper',
        needBy: '6:00pm',
        email: 'zephtao@uw.edu',
        password: 'password4',
        buildingCode: 'elm'
      },
    ];
    
    export const getUsers = () => users;
    
    export const getUser = (email: string) => users.find(u => u.email === email);