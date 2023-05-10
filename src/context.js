import React, { useState, useContext, Component } from 'react';
import Sidebar from './Sidebar';

const AppContext = React.createContext();


// must pass children to show component
const AppProvider = ({children}) =>{
    const[isSidebarOpen, setIsSideBarOpen] = useState(false);
    const [ isModalOpen, setIsModalOpen] = useState(false);


    // fucntions to open and close Sidebar
    const openSideBar = () =>{
        setIsSideBarOpen(true);
    }
    const closeSideBar = () =>{
        setIsSideBarOpen(false);
    }

    const openModal = () =>{
        setIsModalOpen(true);
    }
    const closeModal = () =>{
        setIsModalOpen(false);
    }
     

    // pass object of state
    return<AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
    }}>{children}</AppContext.Provider>
 
}

// custom hook


export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export  {AppContext, AppProvider}