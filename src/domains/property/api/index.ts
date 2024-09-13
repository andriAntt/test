import { Property } from "../types";

export const  getProperties = async () => {
  const res = await fetch('/data/property.json'); 
  const properties: Property[] = await res.json();

  return properties
}

