import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: 'j4r93u89', 
   dataset: "production", 
   apiVersion: "2024-03-11",
   // Set to `true` for production environments
   useCdn: false, 
})