import {
    createContext,
    useContext,
    useState
} from "react";

const AppContext = createContext();

export const AppContextProvider = ({
    children
}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showAddRecipe, setShowAddRecipe] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showNotepad, setShowNotepad] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchedRecipe, setSearchedRecipe] = useState('')
    const [searchSubmit, setSearchSubmit] = useState(false);

    const [mapTheme, setMapTheme] = useState(localStorage.getItem('mapTheme') || 'mapbox://styles/mapbox/dark-v11');
    const [colorTheme, setColorTheme] = useState('bg-purple')

    const [loggedIn, setLoggedIn] = useState(false);
    const [settingsUserPassword, setSettingsUserPassword] = useState('');
    const [settingsUsername, setSettingsUsername] = useState('');
    const [jsWebToken, setJsWebToken] = useState('');

    return ( 
    <AppContext.Provider value = {
            {
                showLogin,
                setShowLogin,
                showAddRecipe,
                setShowAddRecipe,
                showSettings,
                setShowSettings,
                showNotepad,
                setShowNotepad,

                selectedCountry,
                setSelectedCountry,
                searchedRecipe,
                setSearchedRecipe,
                searchSubmit,
                setSearchSubmit,

                mapTheme,
                setMapTheme,
                colorTheme,
                setColorTheme,

                loggedIn,
                setLoggedIn,
                jsWebToken,
                setJsWebToken,
                settingsUsername,
                setSettingsUsername,
                settingsUserPassword,
                setSettingsUserPassword
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