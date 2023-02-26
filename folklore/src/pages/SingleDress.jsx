import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleDressCard from "../Components/DressProduct/SingleDressCard";
import { singleDressData } from "../Redux/Dress/action";

const SingleDress = () => {

    const { id } = useParams();
    const dresses = useSelector((store) => store.dress);

    const dispatch = useDispatch();
    const [dress, setDress] = useState({});

    useEffect(() => {
        dispatch(singleDressData(id))
    }, []);

    return (
        <div>
            {/* single product page {id} */}
            {dresses?.length > 0 && 
            dresses.map((el) => {
                return <SingleDressCard key={el._id} dress={el} />
            })}
        </div>
    )
}

export default SingleDress;