import React from "react";

function useLocalStorage(key, initialValue){

  
  const [item, setStateItem] = React.useState(initialValue);
  const [loading, setStateLoading] = React.useState(true);
  const [error, setStateError] = React.useState(false);
  
  console.log(key);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        
        const localStorageItems = localStorage.getItem(key);
        console.log(localStorageItems);

        let parsedItems;
      
        if (!localStorageItems) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setStateItem(parsedItems);
        }
  
        setStateLoading(false);
  
      } catch (error) {
        setStateLoading(false);
        setStateError(true);
      }

    }, 5000);
  }, []);
    
  
    
  
    const saveItem = (newItems) =>{
      localStorage.setItem(key, JSON.stringify(newItems));
      setStateItem(newItems);
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    }; 
  
  }

  export { useLocalStorage };