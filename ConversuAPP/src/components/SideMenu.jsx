import React from 'react';
import { Drawer,Image, Box, VStack, Button, Text, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { FaHome, FaTicketAlt, FaUser, FaCog,FaBars } from 'react-icons/fa';


const SideBarContent = ({ onClose }) => (
    <VStack spacing={4} align="start">
        <Image 
            src="https://conversu.com.br/wp-content/uploads/2020/09/Group-6.png"
            objectFit="contain"
            px={8}
            py={2}
        />
        <Button leftIcon={<FaHome />} colorScheme="teal" variant="ghost" width="100%">Home</Button>
        <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="ghost" width="100%">Tickets</Button>
        <Button leftIcon={<FaUser />} colorScheme="teal" variant="ghost" width="100%">Profile</Button>
        <Button leftIcon={<FaCog />} colorScheme="teal" variant="ghost" width="100%">Settings</Button>
    </VStack>
)
const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();    
    return (
        <>
            <Box display={{ base: 'none', md: 'block'}} position="fixed" left={0} top={0} height="100vh" width="250px" bg="gray.800" color="white" p={4}>
                <SideBarContent />
            </Box>

            <Box display={{ base: "block", md: 'none'}} py={4} px={2}>
                <Button onClick={onOpen} colorScheme='orange'><FaBars /></Button>
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent bg="gray.800">
                        <DrawerCloseButton color="teal"/>
                        <DrawerBody>
                            <SideBarContent onClose={onClose} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
};

export default Sidebar;
