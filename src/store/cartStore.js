import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { shippingRates } from '../data/mockProducts';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      selectedShipping: 'standard',

      // Add item to cart
      addItem: (product, options = {}) => {
        const { size, color, personalization, quantity = 1 } = options;
        const cartItemId = `${product.id}-${size || 'none'}-${color || 'none'}-${personalization || 'none'}`;

        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.cartItemId === cartItemId
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems };
          }

          return {
            items: [
              ...state.items,
              {
                cartItemId,
                product,
                size,
                color,
                personalization,
                quantity,
              },
            ],
          };
        });
      },

      // Remove item from cart
      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        }));
      },

      // Update quantity
      updateQuantity: (cartItemId, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity } : item
          ),
        }));
      },

      // Cart open/close
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      // Set shipping method
      setShipping: (shippingId) => set({ selectedShipping: shippingId }),

      // Clear cart
      clearCart: () => set({ items: [], selectedShipping: 'standard' }),

      // Computed values
      get itemCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
      },

      getShippingCost: () => {
        const subtotal = get().getSubtotal();
        const shipping = shippingRates.find(
          (r) => r.id === get().selectedShipping
        );
        if (!shipping) return 0;
        if (shipping.freeAbove && subtotal >= shipping.freeAbove) return 0;
        return shipping.price;
      },

      getTotal: () => {
        return get().getSubtotal() + get().getShippingCost();
      },

      getTotalWeight: () => {
        return get().items.reduce(
          (sum, item) => sum + (item.product.weight || 0) * item.quantity,
          0
        );
      },
    }),
    {
      name: 'wafi-cart',
      partialize: (state) => ({
        items: state.items,
        selectedShipping: state.selectedShipping,
      }),
    }
  )
);

export default useCartStore;
