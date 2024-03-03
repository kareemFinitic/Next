import { api } from "./axios";



// ===================================users Api endpoint ===========================================

// get All Categories
export async function getAllCategories(){
        let res = await api.get("get_all_cats")
       return res.data
}

// get SubCategories Id
export async function getSubCategoriesId(id){
        let res = await api.get("properties?cat="+ id)
       return res.data
}
    
 
// get Options ChildId
export async function getOptionsChildId(id){
let res = await api.get("get-options-child/"+ id)
       return res.data
}        