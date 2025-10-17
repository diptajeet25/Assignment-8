
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
       alert("Bo")

    }
    else{
        const newData =[...existingData, id];
        localStorage.setItem("installed", JSON.stringify(newData));
        alert("Add hoise re vai")
        console.log(id);
    
    }
}
const removeItem = (id) => {
  const inApps = getItem();
  const updatedApp = inApps.filter(appId => appId !== id);
  localStorage.setItem("installed", JSON.stringify(updatedApp));
  alert("Remove hoise re vai 😄");
};
export {getItem, addItem,removeItem};