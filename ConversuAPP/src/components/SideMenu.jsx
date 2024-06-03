// components/Sidebar.js
import React from 'react';
import { Image, Box, VStack, Button, Text } from '@chakra-ui/react';

const Sidebar = () => {
    return (
        <Box
            position="fixed"
            left={0}
            top={0}
            height="100vh"
            width="250px"
            bg="gray.800"
            color="white"
            p={4}
        >
            <VStack spacing={4} align="start">
                <Image 
                    src="https://conversu.com.br/wp-content/uploads/2020/09/Group-6.png"
                    objectFit="contain"
                    px={8}
                    py={2}
                />
                <Text fontSize="xl" mb={4}>Menu</Text>
                <Button colorScheme="teal" variant="ghost" width="100%">Home</Button>
                <Button colorScheme="teal" variant="ghost" width="100%">Tickets</Button>
                <Button colorScheme="teal" variant="ghost" width="100%">Profile</Button>
                <Button colorScheme="teal" variant="ghost" width="100%">Settings</Button>
            </VStack>
        </Box>
    );
};

export default Sidebar;
