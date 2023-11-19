import axios from "axios";
import { useEffect, useState } from "react"

export default function AddTypeProduct() {
    const [typeName, setTypeName] = useState('');
    const [types, setTypes] = useState([]);
    const [change, setChange] = useState(false)
    function savePlace(ev) {
        ev.preventDefault();
        if(typeName){
            axios.post('/addTypeProduct', {
                typeName
            }).then(response => {
                setChange(!change);
                setTypeName('');
            })
            .catch(e => {
                alert("fail");
            })
        }
       
    }

    function removeType(typeId) {
        if(typeId) {
            axios.delete(`/deleteTypeProduct/${typeId}`).then(response => {
                setTypes([...types.filter(type => type._id !== typeId)])
                alert("Delete success");
                //alert(response.data)
            })
            .catch(e=> {
                alert('Delete fail');
            })
            
        }
    }

    useEffect(()=>{
        axios.get('/typeProduct').then(response => {
            setTypes(response.data);
            // console.log(types);
        })
        .catch(e => {
            alert('fail')
        })
    }, [change])

    

    return ( 
        <div className="flex flex-row mt-10 justify-between mx-10">
        <form onSubmit={savePlace} className="w-1/3 ">
             <h1 className="text-2xl">Add Type Product</h1>
                <input type="text" value={typeName} onChange={ev => setTypeName(ev.target.value)} placeholder="Type Name"/>
                
                <div>
                    <button className="primary my-4">Save</button>
                </div>
        </form>
        <div className="bg-white text-black p-5 flex flex-col gap-5 rounded-2xl ">
            <h1 className="text-2xl"> View all Type Product</h1>
          {types.length > 0 && types.map((type, i) => {
            return (
                <div key={i} className=" flex justify-between p-3 bg-pink-300" >
                    {type.typeName}
                    <div onClick={() => {removeType(type._id)}}>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-gray-600 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </div>
                    

                </div>
            )
          })}
        </div>
        </div>
    )
}