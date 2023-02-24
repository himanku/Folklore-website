import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Img,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaLocationArrow, FaAppStore } from 'react-icons/fa';
import { BsEmojiAngryFill, BsMailbox } from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};



export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#f7f6f2')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Help !</ListHeader>
            

                    <Link href={'#'}>Help</Link>
                    <Link href={'#'}>Track Your Order</Link>
                    <Link href={'#'}>Start A Return Or Exchange (US + CA)</Link>
                    <Link href={'#'}>Returns & Exchanges</Link>
                    <Link href={'#'}>Shipping</Link>
                    <Link href={'#'}>Customer Service</Link>
                    <Link href={'#'}>Current Promotions</Link>
                    <Link href={'#'}>Product Recalls</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>

            <Link href={'#'}> Our Story</Link>
            <Link href={'#'}>Events</Link>
            <Link href={'#'}>A Greater Good</Link>
            <Link href={'#'}>Diversity & Inclusion</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>connect</ListHeader>
<Link href={'#'}>AnthroPerks</Link>
<Link href={'#'}>Gift Cards</Link>
<Link href={'#'}>AnthroLiving Designer & Trade Program</Link>
<Link href={'#'}>Furniture: Guides & Services</Link>
<Link href={'#'}>Store Pickup & Collection Points</Link>
<Link href={'#'}>Klarna</Link>
          </Stack>
          <Stack align={'flex-start'}  >
             <Text display={"flex"} gap={4}><FaLocationArrow/> Location</Text>
             <Text  display={"flex"} gap={4}> <BsMailbox/>Get Email</Text>
          </Stack>

           
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={"center"}
          align={ 'center' }>
           
          <Stack direction={'row'} spacing={6}>
          <Flex gap={4} alignItems={"center"}><FaAppStore />  </Flex>
          <Flex  gap={4} alignItems={"center"}><IoLogoGooglePlaystore />  </Flex>
               <FaTwitter />
             
             
              <FaYoutube />
           
            
              <FaInstagram />
             
          </Stack>
        </Container>
        <Img src='https://images.ctfassets.net/5de70he6op10/6nrsoJocqQ4U6eqiU4Co20/8e677777fc39ddfb8d739978b79515d3/020123_AnthroPerksLaunch_SiteFooter_LS.jpg' />
      </Box>
    </Box>
  );
}