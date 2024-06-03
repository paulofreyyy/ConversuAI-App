import React, { useState } from 'react';
import {Text,Flex,Modal, Box, Button, Container, Heading, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, SimpleGrid } from '@chakra-ui/react';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import TicketDrawer from './components/TicketDrawer'
import Cards from './components/Cards'
import SideMenu from './components/SideMenu'

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const{
        isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onClose: onDrawerClose,
    }    = useDisclosure();

    const addTicket = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    const removeTicket = (index) => {
        setTickets(tickets.filter((_,i) => i !== index));
    }

    const openDrawer = (ticket) => {
        setSelectedTicket(ticket);
        onDrawerOpen();
    }

    return (
        <Flex>
            <SideMenu />
            <Box ml={{ base:0, md: "250px"}} width={{ base: "100%", md: "calc(100% - 250px)" }} p={4}>
                <Container maxW="container.lg" py={4}>
                    <Button mb={4} colorScheme="orange" onClick={onOpen}>
                        Novo Ticket
                    </Button>

                    
                    <Cards tickets={tickets} />

                    <Heading size="md" mb="4" color="DarkViolet">Listagem de Tickets</Heading>
                    <TicketList tickets={tickets}  removeTicket={removeTicket}  openDrawer={openDrawer} />

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Novo Ticket</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody>
                                <NewTicketForm addTicket={addTicket} onClose={onClose} />
                            </ModalBody>
                        </ModalContent>
                    </ Modal>

                    {selectedTicket && (
                        <TicketDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} ticket={selectedTicket}/>
                    )}
                </Container>
            </Box>
        </Flex>

    );
};

export default App;
