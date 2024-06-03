import React from "react";
import { Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react";

const TicketDrawer =({ isOpen, onClose, ticket, removeTicket }) => {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader color="DarkViolet" fontWeight="bold">Detalhes do Ticket</DrawerHeader>

                <DrawerBody>
                    <VStack align="start" spacing={4}>
                        <Text>
                            <strong>Email:</strong> 
                            <br />
                            {ticket.email}
                        </Text>
                        <Text>
                            <strong>Assunto:</strong>
                            <br />
                             {ticket.subject}
                        </Text>
                        <Text>
                            <strong>Produto:</strong> 
                            <br />
                            {ticket.product}
                        </Text>
                        <Text>
                            <strong>Descrição:</strong> 
                            <br />
                            {ticket.description}
                        </Text>
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <Button colorScheme="orange">Responder</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default TicketDrawer;