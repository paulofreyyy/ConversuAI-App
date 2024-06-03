import React from "react";
import { Box, Text, SimpleGrid, Heading, Flex } from '@chakra-ui/react';

const Cards = ({ tickets }) => {
    const countTicketsByProduct = (product) => {
        return tickets.filter(ticket => ticket.product === product).length;
    }
    
    return (
        <SimpleGrid columns={{ sm:1, md: 3 }} spacing={10} mb={10}>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Heading as="h4" size="md" color="#251d8d">Sua operação</Heading>
                <Text color="gray">Quantidade de tickets realizados hoje</Text>
                <br></br>
                <Flex justifyContent="space-between"  px={10}>
                    <Text align="center">
                        <strong>{tickets.length}</strong>
                        <br />
                        Em aberto
                    </Text>
                    <Text align="center">
                        <strong>0</strong>
                        <br />
                        Finalizados
                    </Text>
                </Flex>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Heading as="h4" size="md" color="#251d8d">Seus atendimentos</Heading>
                <Text  color="gray">Resumo dos tickets por produtos no momento</Text>
                <br></br>
                <Flex justifyContent="space-between"  px={10}>
                    <Text align="center">
                        <strong>{countTicketsByProduct("Sistema 1")}</strong>
                        <br />
                        Sistema 1
                    </Text>
                    <Text align="center">
                        <strong>{countTicketsByProduct("Sistema 2")}</strong>
                        <br />
                        Sistema 2
                    </Text>
                </Flex>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Heading as="h4" size="md" color="#251d8d">Jornada</Heading>
                <Text  color="gray">Resumo da sua jornada diária</Text>
                <br></br>
                <Flex justifyContent="space-between"  px={10}>
                    <Text align="center">
                        <strong>08:00</strong>
                        <br />
                        Início
                    </Text>
                    <Text align="center">
                        <strong>18:00</strong>
                        <br />
                        Fim
                    </Text>
                </Flex>
            </Box>
        </SimpleGrid>
    );
};

export default Cards;
