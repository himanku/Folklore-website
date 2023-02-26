import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const DressSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("brand");
    const initialOrder = searchParams.get("order");
    const [brand, setBrand] = useState(initialState || []);
    const [order, setOrder] = useState(initialOrder || "");

    const handleFilter = (e) => {
        const newBrand = [...brand];

        if (newBrand.includes(e.target.value)) {
            newBrand.splice(newBrand.indexOf(e.target.value), 1);
        } else {
            newBrand.push(e.target.value);
        }
        setBrand(newBrand);
    }

    const handleSort = (e) => {
        setOrder(e.target.value);
    }

    useEffect(() => {
        let params = {
            brand
        }
        // order && (params.order = order)
        setSearchParams(params);
    }, [brand, order]);

    return (
        <SidebarWrapper>
            <p>Browse By:</p>
            <div>
                <FilterSort>Filter By Brands:</FilterSort>
                <div>
                    <input
                        type="checkbox"
                        value="Mini_Dress"
                        onChange={handleFilter}
                        checked={brand.includes("Mini_Dress")}
                    />
                    <label>Mini Dress</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="Maxi_Dress"
                        onChange={handleFilter}
                        checked={brand.includes("Maxi_Dress")}
                    />
                    <label>Maxi Dress</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="Sleeve_Dress"
                        onChange={handleFilter}
                        checked={brand.includes("Sleeve_Dress")}
                    />
                    <label>Sleeve Dress</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="Tunic_Dress"
                        onChange={handleFilter}
                        checked={brand.includes("Tunic_Dress")}
                    />
                    <label>Tunic Dress</label>
                </div>
            </div>
            <div>
                <FilterSort>Sort By Rating:</FilterSort>
                <div onChange={handleSort}>
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"asc"}
                        defaultChecked={order === "asc"}
                    />
                    <label>low</label>
                    <br />
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"desc"}
                        defaultChecked={order === "desc"}
                    />
                    <label>high</label>
                </div>
            </div>
        </SidebarWrapper>
    )
}

export default DressSidebar;


const SidebarWrapper = styled.div`
  padding: 20px 0px 0px 20px;
  line-height: 30px;
`

const FilterSort = styled.p`
  width: 90%;
  text-align: start;
  font-weight: 600;
  margin: 10px;
`

