import React, { useState } from 'react';
import {Modal, Box, Button, Container, Heading, VStack, StackDivider, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const addTicket = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    const removeTicket = (index) => {
        setTickets(tickets.filter((_,i) => i !== index));
    }

    return (
        <Container maxW="container.md" py={4}>
            <Heading as="h1" mb={4}>Gerenciamento de Tickets</Heading>
            
            <Button mb={4} colorScheme="teal" onClick={onOpen}>
                Novo Ticket
            </Button>

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

            <TicketList tickets={tickets}  removeTicket={removeTicket} />
        </Container>
    );
};

export default App;
