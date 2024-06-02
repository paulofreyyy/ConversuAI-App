// src/components/TicketList.jsx
import React from "react";
import { Tag,HStack,Box, VStack, Text, StackDivider, Button, SimpleGrid, Tooltip } from '@chakra-ui/react';

const TicketList = ({ tickets, removeTicket }) => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2}} spacing={4}>
            {tickets.length === 0 ? (
                <Text>Nenhum ticket foi criado ainda.</Text>
            ) : (
                tickets.map((ticket, index) => (
                    <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
                        <VStack align="start" spacing={2}>
                            <HStack justifyContent="space-between" width="100%">
                                <Text fontWeight="bold" isTruncated maxWidth="250px">{ticket.subject}</Text>
                                <Button colorScheme="red" size="sm" onClick={() => removeTicket(index)}>
                                    Excluir
                                </Button>
                            </HStack>

                            <Text isTruncated maxWidth="250px">{ticket.email}</Text>
                            <Tag>{ticket.product}</Tag>
                        </VStack>
                    </Box>
                ))
            )}
        </SimpleGrid>
    );
};

export default TicketList;
