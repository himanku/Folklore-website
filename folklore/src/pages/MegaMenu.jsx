import { Box, Grid, Image, Img, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

const MegaMenu = () => {
    return (
        <Box w={{base:"100%",lg:"95%"}} margin="auto" > 
        <Grid templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(19, 1fr)"}} gap={10} >
        <Menu>
            <MenuButton >
                <Box display="flex" justifyContent="center" w="50px" >
                   
                    <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>New!</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Dresses</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/2wXXPyVj3YKuHduirUr2i6/b1ba7b3915e68fae5c3887b8b45c838f/023123_Feb_Site_Content_ApparelSet501__2x__1_.jpg?w=1440&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Clothing</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src=" https://images.urbndata.com/is/image/Anthropologie/4123212060036_089_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Shoes</Text>
                </Box>
            </MenuButton>
            
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.urbndata.com/is/image/Anthropologie/78605938_080_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="40px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Accessories</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/a0MtRZ7SQBt4BG3ou4Q0C/8dc925c3f44127a95a5a200ec1cbcafc/023123_Feb_Site_Content_ApparelSet503__2x.jpg?w=1440&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="50px" >
                     <Text ml={"20px"} fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Weddings</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/1ZY0kldTaAWxh3dSAcJbg5/d6dc4e9a92d41067f4f0bbd47d57382f/021323_Gateway_slice04.jpg?w=717&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" alignItems={"center"} ml={4} w="120px">
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Home & Furniture</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/3Ai7bUZtZi5xY42vRa7nCY/600452ed34e8abb5b1265b516e90ac88/474338746-aliving_hpg_ls_01_1_-2x.jpg?w=2640&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex"  alignItems="center" w="130px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Beauty & Wellness</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.urbndata.com/is/image/Anthropologie/70741111_072_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" ml={"-10px"} >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Garden & Outdoor</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.urbndata.com/is/image/Anthropologie/54974415_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="end" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Gifts</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.urbndata.com/is/image/Anthropologie/78605938_080_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Sale</Text>
                </Box>
            </MenuButton>
            <MenuList>
            <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                 
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
       
        </Grid>
    </Box>
  )
}

export default MegaMenu






