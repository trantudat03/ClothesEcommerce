import axios from "axios";
import { useEffect, useState } from "react";

import UploadPhotos from "./UploadPhotos";

export default function FormProduct() {
    const [name, setName] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
    const [priceNew, setPriceNew] = useState(0);
    const [priceOld, setPriceOld] = useState(0);
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [images, setImages] = useState([]);
    const [listType, setListType] = useState([]);

    function savePlace(ev) {
        ev.preventDefault();

        const data = {name, typeProduct, priceNew, priceOld, description,quantity,images};
        axios.post('/product', 
              data
        ).then(response=> {
            setName('');
            setDescription('');
            setPriceNew(0);
            setPriceOld(0);
            setQuantity(0);
            setTypeProduct(listType[0]);
            setImages([]);
            alert('Create product success');
        })
        .catch(e=>{
            alert("Create product fail");
        })
    }

    function handChangeType(ev) {
        setTypeProduct(ev.target.value);
        
    }
    

    useEffect(()=> {
       try {
         axios.get('/typeProduct').then(async ({data})=> {
            await setListType(data)
            
        })
        
        
       }catch(e) {

       }
    }, [])

    useEffect(()=> {
    
         if(listType.length > 0) {
             setTypeProduct(listType[0]._id);
            //  console.log(listType)
         }
         
        
    }, [listType])

    

    return (
        <div className="p-6 mt-5 ml-5 mr-5 bg-pink-100 rounded-xl">
            <h1 className="text-2xl text-black">Add Product</h1>
            <hr className="bg-black h-1 rounded-2xl outline-none"/>
            <form onSubmit={savePlace} className="w-full grid sm:grid-cols-2">
             
                <div className="px-10">
                
                <h2 className=" text-black text-xl mb-0 mt-4">- Category</h2>
                <select className=" outline-none pt-3 text-xl text-black" id="typeProducts" value={typeProduct} name="type" onChange={handChangeType}>
                  {listType.length >0 && listType.map((type, i) => {
                    return (
                        <option key={i} value={type._id}> {type.typeName}</option>
                    )
                  })}
                </select>
                <div>
                    <h2 className=" text-black text-xl mb-0 mt-4">- Name Product</h2>
                    <input className="outline-none pl-4 text-black text-xl" type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="Name Product"/>
                </div>
                <div>
                    <h2 className=" text-black text-xl mb-0 mt-4">- Description</h2>
                    <textarea className="outline-none pl-4 text-black text-xl" type="text" value={description} onChange={ev => setDescription(ev.target.value)} placeholder="Description"/>
                </div>
                </div>
                
                <div className="px-10">
                <div>
                    <h2 className=" text-black text-xl mb-0 mt-4">- New Price</h2>
                    <input className="outline-none pl-4 text-black text-xl" type="number" value={priceNew} onChange={ev => setPriceNew(ev.target.value)} placeholder="Name Product"/>
                </div>

                <div>
                    <h2 className=" text-black text-xl mb-0 mt-4">- Old Price</h2>
                    <input className="outline-none pl-4 text-black text-xl" type="number" value={priceOld} onChange={ev => setPriceOld(ev.target.value)} placeholder="Name Product"/>
                </div>
                <div>
                    <h2 className=" text-black text-xl mb-0 mt-4">- Quantity</h2>
                    <input className="outline-none pl-4 text-black text-xl" type="number" value={quantity} onChange={ev => setQuantity(ev.target.value)} placeholder="Name Product"/>
                </div>
                <div>
                    <h2 className=" text-black text-xl mb-1 mt-4">- Images</h2>
                    <div className="flex flex-row w-full">
                        <UploadPhotos images={images} setImages={setImages}/>
                        
                    </div>
                </div>
                

                </div>
                
                
                <div>
                    <button className="primary my-4">Save</button>
                </div>
        </form>
        </div>
    )
}