import React, { ReactNode } from 'react';

enum EGender {
    female = 0,
    male
}

// ? Because they are not all used as props in SetCarButtons
export interface IUser {
    userId: string;
    name?: string;
    gender?: string;
    amountCars?: number;
    annualExpenses?: number;
    carIndex: number
}

const mockUser = {} as IUser;
mockUser.userId = "1";
mockUser.name = "Joana";
mockUser.gender = ""
mockUser.amountCars = 0;
mockUser.carIndex = 0;
mockUser.annualExpenses = 0;

interface IUserContextInterface {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    setAmountCarsData: (index: number) => void
    setUserData: (user: IUser) => void
}

// Create Context
const UserContext = React.createContext<IUserContextInterface>({
    user: mockUser,
    setUser: () => ({}),
    setAmountCarsData: () => [],
    setUserData: () => [],
});

export interface Props {
    children?: ReactNode;
}

// Create Context Provider
export default function UserProvider({ children }: Props) {
    const [user, setUser] = React.useState(mockUser);

    function setAmountCarsData(index: number) {
        let userCopy = JSON.parse(JSON.stringify(user));
        userCopy.amountCars = index;
        setUser(userCopy);
    }
    function setUserData(user: IUser) {
        console.log(user);
        setUser(user);
    }

    const hook = {
        user,
        setUser,
        setAmountCarsData,
        setUserData
    };

    return <UserContext.Provider value={hook}>{children}</UserContext.Provider>;
}


// Function to access the User Context on other components:
export function useUserContext() {
    return React.useContext<IUserContextInterface>(UserContext);
}
// the choice for useContext instead of Consumer refer to:
// https://stackoverflow.com/questions/56816374/context-consumer-vs-usecontext-to-access-values-passed-by-context-provider


