import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCollectionStore = 
    create(persist((set) => ({
        collection: [],
        addRef: (ref) => set((state) => ({collection: [...state.collection, ref]}))
    })),
    {name: "collection-store"}

)