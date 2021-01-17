import React, { ReactNode } from 'react';

enum EGender {
    female = 0,
    male
}

// ? Because they are not all used as props in SetCarButtons
export interface IUser {
    userId?: number;
    name?: string;
    gender?: string;
    amoutCars?: number;
    annualExpenses?: number;
    carIndex: number
}

const mockUser = {} as IUser;
mockUser.userId = 1;
mockUser.name = "Joana";
mockUser.gender = "Female"
mockUser.amoutCars = 2;
mockUser.carIndex = 0;
mockUser.annualExpenses = 200;

interface IUserContexInterface {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    setCarIdx: (index: number) => void
}

// Create Context
const UserContext = React.createContext<IUserContexInterface>({
    user: mockUser,
    setUser: () => ({}),
    setCarIdx: () => [],
});

export interface Props {
    children?: ReactNode;
}

// Create Context Provider
export default function UserProvider({ children }: Props) {
    const [user, setUser] = React.useState(mockUser);

    function setCarIdx(index: number) {
        const userCopy = JSON.parse(JSON.stringify(user));
        userCopy.carIndex = index;
        setUser(userCopy);
    }

    const hook = {
        user,
        setUser,
        setCarIdx
    };

    return <UserContext.Provider value={hook}>{children}</UserContext.Provider>;
}


// Function to access the User Context on other components:
export function useUserContext() {
    return React.useContext<IUserContexInterface>(UserContext);
}
// the choice for useContext instead of Consumer refer to:
// https://stackoverflow.com/questions/56816374/context-consumer-vs-usecontext-to-access-values-passed-by-context-provider


