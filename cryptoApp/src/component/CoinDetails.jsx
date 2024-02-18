import { Container, Box, HStack, RadioGroup, Radio,VStack,Text,Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from './Loader';
import { server } from '../main';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")

  const params = useParams()

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false)

      } catch (error) {
        setError(true)
        setLoading(false)
      }
    };
    fetchCoin();
  }, [params.id]);

  if (error) return <ErrorComponent message={"Error while fetching coins"} />;

  return <Container maxH={'container.xl'}>

    {loading ? (

      <Loader />
    ) : (
      <>
        <Box width={'full'} borderWidth={1}>
          asdas
        </Box>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={'4'}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>
             
             <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
                     <Text fontSize={'small'} alignItems='center'  opacity={0.7}>
                           Last Updated On {Date(coin.market_data.last_updated).split("G")[0]}
                     </Text>
                     <Image 
                     src={coin.image.large}
                     w={'16'}
                     h={'16'}
                     objectFit={'contain'}
                       />
             </VStack>
      </>
    )}



  </Container>

}

export default CoinDetails