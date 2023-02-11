import { createContext, ReactNode, useReducer } from 'react'
import { localStorageKeys } from 'utils/constants'
import {
    AppContextType,
    AppReducerAction,
    AppStateType,
    LanguageType,
    LanguageValue,
} from 'types/appTypes'
import { localization as loc } from 'assets/localization/localization'

const initAppState: AppStateType = {
    userName: '',
    language: 'pl',
}

const appReducer = (state: AppStateType, action: AppReducerAction): AppStateType => {
    switch (action.type) {
        case 'setUserName':
            return { ...state, userName: action.value }
        case 'setLanguage':
            return { ...state, language: action.value }
    }
}

const AppContext = createContext<AppContextType>({
    appState: initAppState,
    appDispatch: () => null,
    localization: loc.pl,
})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [appState, appDispatch] = useReducer(appReducer, initAppState, (): AppStateType => {
        let language: LanguageType
        if (localStorage.getItem(localStorageKeys.app.LANGUAGE) === LanguageValue.cz) {
            language = LanguageValue.cz
        } else {
            language = LanguageValue.pl
        }

        return {
            ...initAppState,
            userName: localStorage.getItem(localStorageKeys.app.USER_NAME) ?? '',
            language: language,
        }
    })

    const localization = appState.language === 'pl' ? loc.pl : loc.cz

    return (
        <AppContext.Provider value={{ appState, appDispatch, localization }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
