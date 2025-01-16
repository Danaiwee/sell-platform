import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),

    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products: data.products});
        
    },

    createProduct: async (newProduct) => {
            if(!newProduct.name || !newProduct.price || !newProduct.image) {
                return {sucess: false, message: 'All fields are required'}
            }

            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct)
            });

            const data = await res.json();
            set((state) => ({products: [...state.products, data.product]}));

            return {success: true, message: "Product created successfully"}
    },

    updateProduct: async (productId, updateProduct) => {
        const res = await fetch(`/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        });

        const data = await res.json();
        if(!data.success) return {success: false, message: data.message}

        set((state) => ({
            products: state.products.map((product) => (
                product._id === productId ? data.product : product
            ))
        }))

    },
    deleteProduct: async (productId) => {
        const res = await fetch(`/api/products/${productId}`, {
            method: 'DELETE'
        });

        const data = await res.json();
        if(!data.success) return {success: false, message: data.message}

        set((state) => ({products: state.products.filter((product) => product._id !== productId)}));
        return {success: true, message: data.message}
    },
}));