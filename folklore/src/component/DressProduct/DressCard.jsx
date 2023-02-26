import { Link } from "react-router-dom";
import styled from "styled-components";

const DressCard = ({ dress }) => {

    return (
        <DressCardContainer>
            <ImageWrapper>
                <Image src={dress.img1} alt="dress-image" />
                <Link to={`/singledress/${dress._id}`}>
                    <Button>Quickshop</Button>
                </Link>
            </ImageWrapper>
            <DressName>{dress.name}</DressName>
            <BrandName>Brand: {dress.brand}</BrandName>
            <Prize>Price: ₹ {dress.lowprice}</Prize>
            <Rating>Rating: {dress.rating}</Rating>
        </DressCardContainer>
    )
}

export default DressCard;


const DressCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 670px) {
    width: 90%;
  }
`


const Image = styled.img`
  width: 90%;
  margin: auto;

  @media (max-width: 670px) {
    width: 80%;
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const Button = styled.button`
  width: 90%;
  position: absolute;
  top: 88%;
  left: 5%;
  padding: 15px 0px;
  font-size: 17px;
  border: none;
  color: transparent;
  background-color: transparent;

  &: hover {
    background-color: #e0e0e0;
    transition: 0.5s;
    color: #f57f17;
    cursor: pointer;
  }
`

const DressName = styled.p`
  width: 90%;
  margin: 10px auto;
  text-align: start;
  font-weight: 600;
  font-size: 18px;
`

const BrandName = styled.p`
  width: 90%;
  margin: auto;
  text-align: start;
`

const Prize = styled.p`
  width: 90%;
  margin: 10px auto;
  text-align: start;
`

const Rating = styled.p`
  width: 90%;
  margin: auto;
  text-align: start;
`