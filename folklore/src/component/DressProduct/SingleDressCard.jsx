import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addTocart } from "../../Redux/Dress/action";

const SingleDressCard = ({ dress }) => {

  const dispatch = useDispatch();

  const percentageOff = Math.floor(100 - ((dress.lowprice / dress.highprice) * 100));

  const handleCart = async () => {
    try {
      await dispatch(addTocart(dress));
      alert(`${dress.name} is successfully added into the cart`)
    } catch (error) {
      alert('Please login first')
      console.log(error);
    }
  }

  return (
    <ContainerWrapper>
      <ImageContainer>
        <div>
          <MainImage src={dress.img1} alt="dress-image" />
        </div>
        <MultipleImageWrapper>
          <ImageWrapper src={dress.img2} alt="dress-image" />
          <ImageWrapper src={dress.img3} alt="dress-image" />
          <ImageWrapper src={dress.img4} alt="dress-image" />
        </MultipleImageWrapper>
      </ImageContainer>
      <DetailContainer>
        <DressName>{dress.name}</DressName>
        <BrandName>Brand: {dress.brand}</BrandName>
        <TotalPrize>
          <div style={{
            color: "darkgreen"
          }}>Prize: ₹ {dress.lowprice}</div>
          <div style={{
            color: "darkred"
          }}>₹ <s>{dress.highprice}</s></div>
        </TotalPrize>
        <PercentOff>{percentageOff} % Off on dress product</PercentOff>
        <Rating>Rating: {dress.rating}</Rating>
        <Link><Button onClick={handleCart}>ADD TO BASKET</Button></Link>
        <AddImage>
          <Advertise
            src="https://images.ctfassets.net/5de70he6op10/2Rpu6u3EFqc114MjUUqT0I/ce6f358dc628065bf661befa896b11db/023123_Feb_Site_Content_ApparelSet502__2x__1_.jpg?w=1440&q=80&fm=webp"
            alt="dress-ads"
          />
          <Cross>X</Cross>
        </AddImage>
      </DetailContainer>
    </ContainerWrapper>
  )
}

export default SingleDressCard;



const ContainerWrapper = styled.div`
  border: 1px solid grey;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  grid-gap: 2%;
  margin: 50px auto;
  padding: 20px;
`


// Image Container
const ImageContainer = styled.div`
`

const MainImage = styled.img`
  width: 80%;
  height: 500px;
`

const MultipleImageWrapper = styled.div`
  display: flex;
  gap: 2%;
  margin: 20px 10px;
`

const ImageWrapper = styled.img`
  width: 30%;
  height: 200px;
`

// Dress container
const DetailContainer = styled.div`
  border-left: 1px solid grey;
  padding: 20px;
`

const DressName = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;

  &: hover {
    color: #f57f17;
    transition: 0.5s;
  }
`

const BrandName = styled.div`
  font-size: 20px;
  margin: 20px 0px;
`

const TotalPrize = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 20px auto 10px auto;
  font-size: 19px;
`

const PercentOff = styled.div`
  color: darkgreen;
  margin: 0px 0px 20px 0px;
  font-size: 18px;
`

const Rating = styled.div`
  color: #f57f17;
  margin: 20px 0px;
  font-size: 18px;
`

const Button = styled.button`
  margin: 30px 0px;
  font-size: 1.3rem;
  letter-spacing: .24rem;
  min-height: 45px;
  padding: 10px 20px;
  border: none;
  transition-duration: .5s;
  color: white;
  background-color: grey;

  &: hover {
    cursor: pointer;
    color: grey;
    background-color: white;
    border: 1px solid;
    border-radius: 1rem;
  }
`


const AddImage = styled.div`
  margin: 40px auto 0px auto;
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
`

const Advertise = styled.img`
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`

const Cross = styled.p`
  border: 1px solid grey;
  width: 4%;
  position: absolute;
  top: -4%;
  left: 96%;

  @media (max-width: 600px) {
    display: none;
  }
`