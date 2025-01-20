// type และ interface เป็น function เดียวกัน ทำงานเหมือนกัน
import { Title } from './../../nuxt3-demo/.nuxt/components.d';
import { Link } from './../../nuxt3-demo/.nuxt/components.d';
/*type Post = {

}

interface Post {

} 
*/

type Post = {
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
