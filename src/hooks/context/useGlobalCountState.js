import React,{
  createContext,
  useContext,
  useState
} from 'react';

const GlobalCountContext = createContext({});

const GlobalCountProvider  = ({children})=>{
  const [counter, setCounter] = useState(0);
  return(
    <GlobalCountContext.Provider value={[counter, setCounter]}>
      {children}
    </GlobalCountContext.Provider>
  )
}

const useGlobalCountState = ()=>{
  const context = useContext(GlobalCountContext)
  if (!context) {
    throw new Error('useCollapseSideBar must be used within an CollapseSideBarProvider');
  }

  return context;
}

export {GlobalCountProvider,useGlobalCountState}