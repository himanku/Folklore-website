
import React from 'react';



import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Badge, Box, Button, Flex, Icon, Image, Tooltip } from '@chakra-ui/react';






  
 

  function HighlitedProduct2 () {
   
    const navigate=useNavigate()

  
   const CompleteData=["https://images.urbndata.com/is/image/Anthropologie/4120089450007_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   "https://images.urbndata.com/is/image/Anthropologie/81480394_011_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   "https://images.urbndata.com/is/image/Anthropologie/4110089540099_010_b14?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698"]
  return ( 
    <> 
    

    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      w={"100%"}
      height={"100%"}
      

      
      pagination={{
        clickable: true,
        
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }}
      modules={[Pagination]}
      className="mySwiper"
    >

    


            {
                CompleteData.map((item)=>{
                   return( 
                    <SwiperSlide  position={"relative"} key={Math.random()*10} > 
                     <Image
                            h={"100%"}
                            src={`${item}`}
                            alt={`Picture of ${item.minRentAmount}`}
                            
                            />
                            <Button position={"absolute"} bottom={2}  left="42%">Shop now</Button>
                    </SwiperSlide>
                   
                    )
                })
            }

        
       
    </Swiper>
  </>
  );
};

export default HighlitedProduct2;