export const getCategoryData = async()=>{
    const CategoryData = await fetch(`/category.json`)
    const cdata = await CategoryData.json();
    return cdata;
}