import { Divider, Flex, HStack, Icon, Link, useColorMode } from '@chakra-ui/react';
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
    const {colorMode} = useColorMode();
    const iconColor = colorMode === 'dark' ? 'yellow.400':'gray.800';
   return (
    <>
    <Divider orientation='horizontal' color={iconColor}/>
    <Flex justifyContent={'center'} mt={4} mb={4} color={iconColor}>
        Created by Aadityanshu Singh
    </Flex>
    <HStack justifyContent={'center'}>
        <Link href='https://www.instagram.com/aadityanshusingh/' isExternal={true} >
        <Icon as={BsInstagram} boxSize={8} mb={8} color={iconColor}/>
        </Link>
        <Link href='https://www.linkedin.com/in/aadityanshu-singh/' isExternal={true}>
        <Icon as={AiFillLinkedin} boxSize={8} mb={8} color={iconColor}/>
        </Link>
        <Link href='https://github.com/AadityanshuSingh' isExternal={true}>
        <Icon as={AiOutlineGithub} boxSize={8} mb={8} color={iconColor}/>
        </Link>
        
    </HStack>
    </>
  )
}

export default Footer