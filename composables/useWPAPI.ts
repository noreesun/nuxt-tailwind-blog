import { type Post } from '@/types/post'

export default () => {
    //อ่าน Config จาก file .env
    const config = useRuntimeConfig()

    const WP_URL = config.public.wpUrlAPI

    //กำหนด useFetch ในการอ่าน API
    const get = async<T>(endpoint : string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    //กำหนด useFetch ในการอ่าน API
    const getPosts = async(
        categoty? : number,
        page : number =1,
        perPage : number =10,
       
    ) => {
        let query : string = `posts?page=${page}&per_page=${perPage}&_embed=1`
        if(categoty){
            query += `&categories=${categoty}`
        }
        return get<Post[]>(query)
    }



    //อ่านข้อมูล Post รายการเดียวจาก API โดยใช้ get
    //Get Sigle Post
    const getPost = async (slug:string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`)
    }


     //อ่านข้อมูลหมวดหมู่ Categories จาก API โดยใช้ get
    //Get Categories
    const getCategories = async (field: string ="name, slug, count") => {
        return get<any>(`categories`)
    }


    //อ่านบทความจากหมวดหมู่ที่เลิอกจาก API โดยใช้ get
    //Get all with Select Category
    const getCategory = async (slug:string) => {
        return get<any>(`Categories?slug=${slug}`)
    }



    return {getPosts,getPost, getCategories, getCategory}


}
