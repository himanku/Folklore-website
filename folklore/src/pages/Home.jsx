import { Flex, Grid, VStack, Img, Stack, Button, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../component/Navbar';
import HighlitedCards from './HomeComponets/HighlitedCards';
import HighlitExplore from './HomeComponets/HighlitExplore';
import HighlitedProduct from './HomeComponets/Homehigiglites';
import HighlitedProduct2 from './HomeComponets/Homehigiglites copy';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import HighlitedDress from './HomeComponets/HighlitedDress';
import Highlitedfurniture from './HomeComponets/Highlitedfurniture';
 

const Home = () => {
  const navigate=useNavigate()
    return (
      <Stack m={0} p={0}  >

        {/* ---------------------------------------------------------------------------------------------------Navbar */}
      <Navbar/>
        <VStack p={8} gap={8}>
                                            {/* -----------------------------------------------------------------------------------Home page Top sections */}
            <Grid templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(4, 1fr)",xl:"repeat(4, 1fr)"}}  gap={4} >
                <Flex onClick={()=>navigate("/dress")}> <Img src='https://images.ctfassets.net/5de70he6op10/1yCt23d6XxdmkjGohde5ev/97f13874f53c019005210e6a690f3836/473929257-ls_m0_banner_a.jpg?w=630&q=80&fm=webp'/></Flex>
                <Flex onClick={()=>navigate("/dress")}> <Img src='https://images.ctfassets.net/5de70he6op10/6sUQEatinxFVFTiPZ2WGFG/a0deaee57126fbd5c17e9be6f3f107a1/473929265-ls_m0_banner_b.jpg?w=630&q=80&fm=webp'/></Flex>
                <Flex onClick={()=>navigate("/dress")}> <Img src='https://images.ctfassets.net/5de70he6op10/7vGscCYY7VmIMK7ksaaCb6/0c698333c303336c8a4186ab82d2c43d/473929266-ls_m0_banner_c.jpg?w=630&q=80&fm=webp'/></Flex>
                <Flex onClick={()=>navigate("/dress")}> <Img src='https://images.ctfassets.net/5de70he6op10/5AHOqJRlFibi2rOS0C77aP/3e8dc2dfc62dd089f2cb2e53357a78d3/473929274-ls_m0_banner_e.jpg?w=630&q=80&fm=webp'/></Flex>
                  
            </Grid>

             <Stack position={"relative"}> <Img display={{base:"none",md:"none",lg:"flex",xl:"flex"}}src="https://images.ctfassets.net/5de70he6op10/3eri4S7CUYNA223W694QUo/890cffce3e1cc21308f3051be0a76baa/473929293-ls_m1.jpg?w=2694&q=80&fm=webp"/>
             <Img display={{base:"flex",md:"flex",lg:"none",xl:"none"}} src="https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" /> 
             ,<Button onClick={()=>navigate("/dress")} position={"absolute"} bottom={2}  left={{base:"40%",md:"40%",lg:"46",xl:"46%"}}>Shop now</Button>
              </Stack>
              <Stack w={"100%"} h={"600px"}>
                <HighlitedProduct/>
              </Stack>

              <Grid  templateColumns={{base:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(2, 1fr)",xl:"repeat(2, 1fr)"}}  gap={4} >
                <Flex  position={"relative"}> <Img src='https://images.ctfassets.net/5de70he6op10/5SpSw7RKfexkiiBBqnTSz0/020ab583c49d60f3053868bbaf0ed2e8/473929316-ls_m3a.jpg?w=1302&q=80&fm=webp'/>
                <Button position={"absolute"}    bottom={16}  left={{base:"40%",md:"40%",lg:"46",xl:"46%"}}>Shop now</Button>
                
                </Flex>
                <Flex  position={"relative"}> <Img src='https://images.ctfassets.net/5de70he6op10/6VLdLozl8tBTMYC7Bjy39f/29875f9e1e26ad89cd2a502f70dc9eba/473929321-ls_m3b.jpg?w=1302&q=80&fm=webp'/>
                <Button position={"absolute"}    bottom={16}  left={{base:"40%",md:"40%",lg:"46",xl:"46%"}}>Shop now</Button>
                
                </Flex>
                
            </Grid>
              <Stack w={"100%"} h={"600px"}>
                <HighlitedProduct2/>
              </Stack>

                <Flex  position={"relative"}> <Img display={{base:"none",md:"none",lg:"flex",xl:"flex"}} src='https://images.ctfassets.net/5de70he6op10/BYqngT4RGr1qC07s5Stvm/45ac7c1b8ee7fc4ba75a71c5bae96223/473929345-ls_m5_bhldn.jpg?w=2694&q=80&fm=webp'/>
                <Button position={"absolute"} onClick={()=>navigate("/dress")} display={{base:"none",md:"none",lg:"flex",xl:"flex"}}  bottom={2}  left={{base:"40%",md:"40%",lg:"46",xl:"46%"}}>Shop now</Button>
                </Flex>
                <Flex  position={"relative"}> <Img display={{base:"flex",md:"flex",lg:"none",xl:"none"}} src='https://images.ctfassets.net/5de70he6op10/63SO63SJQhVYHwZXnDynLV/db42241ff01ae5edd29a63193b111859/SS_M5_BHLDN__2_.jpg?w=1125&q=80&fm=webp'/>
                <Button position={"absolute"} onClick={()=>navigate("/dress")}  display={{base:"flex",md:"flex",lg:"none",xl:"none"}}  bottom={16}  left={{base:"40%",md:"40%",lg:"46",xl:"46%"}}>Shop now</Button>
                
                
                </Flex>
                                                    {/* -----------------------------------------------------------------------------------Home page Top-Rated Picks sections */}
                <Stack w={"100%"} h={"600px"} gap={2}>
                  <Heading fontWeight={"thin"} alignItems={"left"}>Top-Rated Picks</Heading>
                <Divider orientation='horizontal' size={"1px"} />
                <HighlitedCards/>
              </Stack>
                                                  {/* -------------------------------------------------------------------------------Two product cursores */}
              <Stack w={"100%"} h={"500px"} gap={2}>
                  <Heading fontWeight={"thin"} alignItems={"left"}>Trending Now</Heading>
                <Divider orientation='horizontal' size={"1px"} />
                <Highlitedfurniture/>
              </Stack>

              <Stack w={"100%"} h={"500px"} gap={2}>
                  <Heading fontWeight={"thin"} alignItems={"left"}>You may like  also</Heading>
                <Divider orientation='horizontal' size={"1px"} />
                <HighlitedDress/>
              </Stack>

              <Stack w={"100%"} h={"450px"} gap={2} textAlign={"center"}>
                  <Heading fontWeight={"normal"}  >More to Explore</Heading>
                <Divider orientation='horizontal' size={"1px"} />
                <HighlitExplore/>
              </Stack>
              <Divider orientation='horizontal' size={"1px"} />
                                                 {/* -----------------------------------------------------------------About us section */}
              <Stack w={"100%"} h={"auto"} mb={10} gap={2} >
                  <Heading fontWeight={"normal"}  >About Us</Heading>
                 
                 <Text>
                 Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion,
                  from cocktail party dresses to wedding guest dresses to casual daytime silhouettes. Shop BHLDN....
                 </Text>
              </Stack>
            
                {/* ---------------------------------------------------------------------------footer */}
        

        </VStack>
        <Footer/>
        </Stack>
    );
};

export default Home;