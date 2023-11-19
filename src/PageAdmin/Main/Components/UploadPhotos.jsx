import axios from "axios";

export default function UploadPhotos({images, setImages}) {

    function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for(let i=0;i< files.length;i++) {
          data.append("photos", files[i]);
        }
        
        axios.post('/upload', data,
        {headers: {'Content-Type': 'multipart/form-data'}}
        ).then(response => {
          const {data:filenames} = response;
          setImages(prev => {
            return [...prev, ...filenames];
          })
        })   

    }

    function removeImage(link) {
        if(link) {
            setImages([...images.filter(i=> i !== link)])
        }
    }

    return (
        <div className="flex flex-row gap-2">
            {images.length > 0 && images.map((image, i) => {
                return (
                    <div key={i} className="relative  items-center flex justify-center gap-1  bg-transparent rounded-xl  h-20 w-20">
                        <div onClick={()=> {removeImage(image)}} className="cursor-pointer absolute left-1 top-1 text-white text-xl bg-slate-800 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>

                        <img className="w-full h-full object-cover rounded-xl" src={`http://localhost:4000/uploads/${image}`} alt=""/>
                    </div>
                )
            })}
            <label className="cursor-pointer items-center flex justify-center gap-1 border border-gray-500 bg-transparent rounded-2xl p-2 text-2xl text-gray-500">
                <input multiple type="file" className="hidden" onChange={uploadPhoto}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload                
            </label>
            
                       
        </div>
    )
}