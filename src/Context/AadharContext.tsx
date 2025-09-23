import { createContext, useState, type ReactNode } from "react";

interface Aadhar{
    front: File | null,
    back: File | null
}

interface AadharContextType {
    aadhar: Aadhar,
    setAadhar : (data: Partial<Aadhar>) => void
}

export const AadharContext = createContext<AadharContextType>({
    aadhar: { front: null, back: null},
    setAadhar: () => {}
});

interface Props {
    children: ReactNode
}

export const AadharProvider = ({ children }: Props) => {
    const [aadhar, setAadharState] = useState<Aadhar>({front:null, back:null})

    const setAadhar = (data: Partial<Aadhar>) => {
        setAadharState((prev) => ({...prev,...data}));
    }

    return (
        <AadharContext.Provider value={{aadhar,setAadhar}}>
            {children}
        </AadharContext.Provider>
    )
}