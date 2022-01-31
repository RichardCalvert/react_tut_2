import { useContext } from "react"
import FavouritesContext from "../store/favourites-context"
import MeetupList from "../components/meetups/MeetupList";

function Favourites(){
    const favouritesCtx = useContext(FavouritesContext);
let content;
if (favouritesCtx.totalFavorites === 0){
    content = <p>You have no favourites. Perhaps add some?</p>
}else{
content = <MeetupList meetups={favouritesCtx.favourites} />
}

    return (
        <section>
            <div>My Favourites</div>
            {content}
        </section>
    )
    
    }
    
    
    export default Favourites