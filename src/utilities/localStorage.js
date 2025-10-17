  import React from 'react';


import { ToastContainer, toast } from 'react-toastify';
  
const getItem =()=>
{
    const data =localStorage.getItem("installed");
    const parsedData =JSON.parse(data);
    if(parsedData)
    {
        return parsedData;
    }
    else{
        return [];
    }
}

const addItem=(id)=>
{
    const existingData =getItem();
    console.log(existingData)
    if(existingData.includes(id))
    {
       console.log("already Exist")

    }
    else{
              toast.success("App Installed Successfully", {
  position: "top-right", 
  autoClose: 2000,        
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",       
});
        const newData =[...existingData, id];
        localStorage.setItem("installed", JSON.stringify(newData));
        
        console.log(id);
    
    }
}
const removeItem = (id) => {
      toast.info("App Uninstall Successfully", {
  position: "top-right", 
  autoClose: 2000,        
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",       
});
  const inApps = getItem();
  const updatedApp = inApps.filter(appId => appId !== id);
  localStorage.setItem("installed", JSON.stringify(updatedApp));
;

};
export {getItem, addItem,removeItem};