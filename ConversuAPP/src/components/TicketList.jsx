// src/components/TicketList.jsx
import React from "react";
import { Box, VStack, Text, StackDivider, Button } from '@chakra-ui/react';

const TicketList = ({ tickets, removeTicket }) => {
    return (
        <VStack
            spacing={4}
            align="stretch"
            divider={<StackDivider borderColor="gray.200" />}
        >
            {tickets.length === 0 ? (
                <Text>Nenhum ticket criado ainda.</Text>
            ) : (
                tickets.map((ticket, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px">
                    <Text>{ticket.title}</Text>
                    <Button colorScheme="red" onClick={() => removeTicket(index)}> 
                        Excluir
                    </Button>
                </Box>
                ))
            )}
        </VStack>
    );
};

export default TicketList;
