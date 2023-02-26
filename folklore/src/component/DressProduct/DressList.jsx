import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getDress } from "../../redux/Dress/action";
import DressCard from "./DressCard";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const DressList = () => {

    const dispatch = useDispatch();
    const { dress } = useSelector((store) => store.dress.dress);
    // const { isLoading, dress, isError } = useSelector((store) => {
    //     return {
    //         isLoading: store.isLoading,
    //         dress: store.dress.dress,
    //         isError: store.isError
    //     }
    // }, shallowEqual);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // console.log("brand: ",(searchParams.getAll("brand")[0]));
    // console.log(location);
    // const order = searchParams.get("order");
    // console.log('order: ',order);

    useEffect(() => {
        // const order = searchParams.get("order");
        let paramObj = {
            brand: location.search,
            // brand: searchParams.getAll("brand"),
            // sort: order && "rating",
            // order: order
        }
        dispatch(getDress(paramObj));
    }, [location.search]);

    return (
        <div>
            {/* { isLoading ? <h3>Loading...</h3> : <div></div> } */}
            {/* { isError ? <h3>something went wrong</h3> : <div></div> } */}
            <DressListWrapper>
                {dress?.length > 0 &&
                    dress.map((el) => {
                        return <DressCard key={el.id} dress={el} />
                    })
                }
            </DressListWrapper>
        </div>
    )
}

export default DressList;


const DressListWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 10px;
`