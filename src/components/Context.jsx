import {useState,createContext,useContext} from 'react'


const AppContext=createContext();


const AppProvider=({children})=> {
    const [modal,setModal] = useState(false);
    const [sidebar,setSidebar] = useState(false);

  const handleModal=()=>{
    setModal(!modal);
  }
  const handleSidebar=()=>{
    setSidebar(!sidebar);
  }


  return (<AppContext.Provider value={{modal,handleModal,sidebar,handleSidebar}}>{children}</AppContext.Provider>)
}

//custom hooks, by creating this we don't need to import two different hooks in other module. 

const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppProvider,useGlobalContext}