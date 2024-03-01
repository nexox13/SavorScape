import {
    createContext,
    useContext,
    useState
} from "react";

const AppContext = createContext();

export const AppContextProvider = ({
    children
}) => {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showAddRecipe, setShowAddRecipe] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showNotepad, setShowNotepad] = useState(false);

    return ( 
    <AppContext.Provider value = {
            {
                showImpressum,
                setShowImpressum,
                showAddRecipe,
                setShowAddRecipe,
                showSettings,
                setShowSettings,
                showNotepad,
                setShowNotepad
            }
        } >
        {
            children
        } 
    </AppContext.Provider>
    )

}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("Not wrapped in context")
    }
    return context;
}