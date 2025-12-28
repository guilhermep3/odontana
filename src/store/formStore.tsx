import { formData } from "@/components/form";
import { create } from "zustand";

interface FormState {
  formData: formData | null;
  setFormData: (data: formData) => void;
  clearFormData: () => void;
};

export const useFormStore = create<FormState>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
  clearFormData: () => set({ formData: null })
}));