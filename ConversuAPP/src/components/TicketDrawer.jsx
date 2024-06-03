import React from "react";
import { Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react";

const TicketDrawer =({ isOpen, onClose, ticket }) => {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Detalhes do Ticket</DrawerHeader>

                <DrawerBody>
                    <VStack align="start" spacing={4}>
                        <Text>
                            <strong>Email:</strong> {ticket.email}
                        </Text>
                        <Text>
                            <strong>Assunto:</strong> {ticket.subject}
                        </Text>
                        <Text>
                            <strong>Produto:</strong> {ticket.product}
                        </Text>
                        <Text>
                            <strong>Descrição:</strong> {ticket.description}
                        </Text>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default TicketDrawer;