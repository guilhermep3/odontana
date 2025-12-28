export type serviceType = {
  id: number;
  name: string;
  description: string;
  img: string;
  icon: string;
  steps: stepType[]
}
export type stepType = {
  id: number;
  stepText: string;
}