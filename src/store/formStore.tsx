import { FormData } from "@/components/form";
import { create } from "zustand";

interface FormState {
  formData: FormData | null;
  setFormData: (data: FormData) => void;
  clearFormData: () => void;
};

export const useFormStore = create<FormState>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
  clearFormData: () => set({ formData: null })
}));