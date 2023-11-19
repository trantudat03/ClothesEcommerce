import { useState } from "react"
import FormProduct from "./Components/FormProduct";
import AddTypeProduct from "./Components/AddTypeProduct";

export default function ManageProduct() {
    const [action, setAction] = useState('addProduct');

   

    return (
        <div className="w-full ">
            <h1 className="text-2xl">Manage Product</h1>
            <div  >
                <div className=" flex flex-row gap-5 items-center justify-center w-full">
                    <button onClick={() => {setAction('addType')}} className="p-5 px-8 rounded-sm text-black">
                    Add Type Product
                    </button>
                    <button onClick={() => {setAction('addProduct')}} className="p-5 px-8 rounded-sm text-black">Add Product</button>
                    
                    <button onClick={() => {setAction('viewAll')}} className="p-5 px-8 rounded-sm text-black">View all products</button>
                </div>
                <div>
                    {action === 'addProduct' && (<FormProduct/>)}
                    {action === 'addType' && (<AddTypeProduct/>)}
                </div>
            </div>
        </div>
    )
}