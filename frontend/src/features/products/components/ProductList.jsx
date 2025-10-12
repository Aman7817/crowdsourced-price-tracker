// // src/features/products/components/ProductList.jsx
// import { useProducts } from '../hooks/useProducts';
// import ProductCard from './ProductCard';
// import AddProductForm from './AddProductForm';

// const ProductList = () => {
//   const { products, loading, error, addProduct, removeProduct } = useProducts();

//   if (loading) return <div className="text-center py-8">Loading products...</div>;
//   if (error) return <div className="text-red-600 text-center py-8">Error: {error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Add Product Form */}
//         <div className="lg:col-span-1">
//           <AddProductForm onAddProduct={addProduct} />
//         </div>
        
//         {/* Product List */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-bold mb-6">Your Tracked Products ({products.length})</h2>
          
//           {products.length === 0 ? (
//             <div className="text-center py-12 bg-gray-50 rounded-lg">
//               <p className="text-gray-600">No products tracked yet. Add your first product!</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {products.map(product => (
//                 <ProductCard 
//                   key={product._id} 
//                   product={product} 
//                   onRemove={removeProduct}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;



import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  if (!products) return <div className="text-center py-8">Loading products...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg text-gray-600">
          No products tracked yet. Add your first product!
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} onRemove={removeProduct} />
        ))
      )}
    </div>
  );
};

export default ProductList;
