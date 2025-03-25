import React, { useState } from 'react';
import ProductService from '../Service/ProductService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const navigate=useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const product = { name, price };
    //     ProductService.addProduct(product, file).then(() => {
    //         setName('');
    //         setPrice('');
    //         setFile(null);
    //     });
    // };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { name, price };
        
        try {
            await ProductService.addProduct(product, file);
            setName('');
            setPrice('');
            setFile(null);
            
        } catch (error) {
            console.error('Error adding product:', error);
        }
        navigate("/listproduct");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
// src/components/AddProduct.js
// import React, { useState } from 'react';
// import { createProduct } from '../Service/ProductService';

// const AddProduct = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);
//     formData.append('image', image);

//     try {
//       await createProduct(formData);
//       setName('');
//       setPrice('');
//       setImage(null);
//       alert('Product added successfully');
//     } catch (error) {
//       console.error('Error adding product', error);
//       alert('Failed to add product');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
//       </div>
//       <div>
//         <label>Image:</label>
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
//       </div>
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProduct;
