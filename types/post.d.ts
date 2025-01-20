// type และ interface เป็น function เดียวกัน ทำงานเหมือนกัน
/*type Post = {

}

interface Post {

} 
*/

export type Post = {
    id: number
    title : {
        rendered : string
    };

    slug : string;
    excerpt : {
        rendered : string
    };

    content:{
        rendered : string
    };
    date : string
    Link : string
    aucthor : number
    _embedded : any
    modified : string


}
