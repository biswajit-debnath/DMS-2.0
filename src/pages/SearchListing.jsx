import React,{useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import Products from '../components/Products';
import { db } from '../config/firebase';


const SearchListing = (props) => {
    const [items,setItems] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect( ()=>{
        let arr=[];
        db.ref('searchList/').orderByChild('term').startAt(props.location.pathname.split("/")[2]).endAt(`${props.location.pathname.split("/")[2]}\uf8ff`).once("value",snap=> {
           // console.log(Object.values(snap.val())[0].category);
            if(snap.val())
            db.ref(`${Object.values(snap.val())[0].category}/`).orderByChild('term').startAt(props.location.pathname.split("/")[2]).endAt(`${props.location.pathname.split("/")[2]}\uf8ff`).once("value",data=> {
                console.log(data.val());
                arr=[... Object.values(data.val())];
                // arr=arr.slice(1);
                console.log(arr);
                setItems(arr);
            });
            setIsLoaded(true); 
        });
        
    },[props])

    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <Products  items={items} isLoaded={isLoaded} props={props}/>
            <FooterComponent />
        </>
    )
}

export default SearchListing;