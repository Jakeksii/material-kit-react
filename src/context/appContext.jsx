import { PropTypes } from "prop-types";
import { useMemo, useState, useContext, createContext } from "react";

const AppContext = createContext(undefined)

export function useAppContext() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('AppContext must be used within a AppContextProvider');
    }
    return context
}

export function AppContextProvider({ children }) {
    const userFromSession = sessionStorage.getItem('user_data')
    const userData = userFromSession ? JSON.parse(userFromSession) : undefined

    const [user, setUser] = useState(userData)
    const [organization, setOrganization] = useState(undefined)

    const contextValue = useMemo(() => ({
        user,
        setUser,
        organization,
        setOrganization,
    }), [user, setUser, organization, setOrganization]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node
}