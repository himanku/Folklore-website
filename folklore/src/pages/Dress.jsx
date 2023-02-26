import styled from "styled-components";
import DressSidebar from "../component/DressProduct/DressSidebar";
import DressList from "../component/DressProduct/DressList";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Dress = () => {
  return (
    <div>
      <Navbar />
      <ProductWrapper>
        <SideBarWrapper>
          <DressSidebar />
        </SideBarWrapper>
        <DressWrapper>
          <DressList />
        </DressWrapper>
      </ProductWrapper>
      <Footer />
    </div>
  )
}

export default Dress;

const ProductWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  gap: 1%;
  border-top: 1px solid grey;
`

const SideBarWrapper = styled.div`
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  width: 20%;

  @media (max-width: 670px) {
    width: 30%;
  }

  @media (max-width: 560px) {
    width: 40%;
  }

  @media (max-width: 450px) {
    width: 60%;
  }
`

const DressWrapper = styled.div`
  width: 80%;
`