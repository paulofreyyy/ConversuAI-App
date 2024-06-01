import React, { useState } from 'react';
import { Box, Button, Container, Heading, VStack, StackDivider } from '@chakra-ui/react';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addTicket = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    const removeTicket = (index) => {
        setTickets(tickets.filter((_,i) => i !== index));
    }

    return (
        <Container maxW="container.md" py={4}>
            <Heading as="h1" mb={4}>Gerenciamento de Tickets</Heading>
            
            <Button mb={4} colorScheme="teal" onClick={() => setShowForm(!showForm)}>
                Novo Ticket
            </Button>

            {showForm && <NewTicketForm addTicket={addTicket} />}

            <TicketList tickets={tickets}  removeTicket={removeTicket} />
        </Container>
    );
};

export default App;
