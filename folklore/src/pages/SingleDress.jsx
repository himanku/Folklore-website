import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleDressCard from "../component/DressProduct/SingleDressCard";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { singleDressData } from "../redux/Dress/action";

const SingleDress = () => {

    const { id } = useParams();
    // const dresses = useSelector((store) => store.dress);
    const dresses = useSelector((store) => store.dress.dress);

    const dispatch = useDispatch();
    const [dress, setDress] = useState({});

    useEffect(() => {
        dispatch(singleDressData(id))
    }, []);

    return (
        <div>
            <Navbar />
            {/* single product page {id} */}
            {dresses?.length > 0 && 
            dresses.map((el) => {
                return <SingleDressCard key={el._id} dress={el} />
            })}
            <Footer />
        </div>
    )
}

export default SingleDress;