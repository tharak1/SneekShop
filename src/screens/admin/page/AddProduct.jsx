import React, { useContext, useState } from 'react'
// import myContext from '../../../context/data/myContext'
import {useDispatch} from "react-redux";
import { createProduct } from '../../../redux/productsSlice';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import {storage} from "../../../config/firebase";
// if (imageUpload == null) return;
import { v4 } from "uuid";

function AddProduct() {

    const dispatch = useDispatch();
    const[image,setImage] = useState(null);
    const[imageAddress,setImageAddress] = useState("");

    const uploadImage = async () => {
        if (image == null) return;
    
        const imageRef = ref(storage, `images/${image.name + v4()}`);
    
        try {
            const snapshot = await uploadBytes(imageRef, image);
            const downloadURL = await getDownloadURL(snapshot.ref);
            console.log("Image address:", downloadURL);
            setImageAddress(downloadURL);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }
    


    const [product,setProduct] = useState({
            title: "",
            price: 0,
            CoverimageUrl: "",
            otherImages : [],
            category: "",
            description: "",
            date: ""
        });

        const addProduct = async () => {
            await uploadImage();
        
            console.log(imageAddress);
        
            if (imageAddress !== "") {
                const updatedProduct = { ...product, CoverimageUrl: imageAddress };
                setProduct(updatedProduct); // Update the local state
        
                dispatch(createProduct(updatedProduct)); // Dispatch with the updated product
            }
        }
        
    
        // const addProduct = async () => {
        //     setIsLoading(true); // Show loading modal
    
        //     await uploadImage();
    
        //     if (imageAddress !== "") {
        //         const updatedProduct = { ...product, CoverimageUrl: imageAddress };
        //         setProduct(updatedProduct); // Update the local state
    
        //         dispatch(createProduct(updatedProduct))
        //             .then((response) => {
        //                 setIsLoading(false); // Hide loading modal
        //                 setSuccessMessage('Product added successfully');
        //             })
        //             .catch((error) => {
        //                 setIsLoading(false); // Hide loading modal
        //                 setErrorMessage('Failed to add product');
        //             });
        //     }
        // }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="file"
                            value={product.imageUrl}
                            onChange={(event) => {
                                setImage(event.target.files[0]);
                            }}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                         value={product.description}
                         onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct