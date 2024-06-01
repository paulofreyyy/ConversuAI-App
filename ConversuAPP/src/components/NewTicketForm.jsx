// src/components/NewTicketForm.jsx
import React, { useState } from "react";
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    VStack,
} from "@chakra-ui/react";

const NewTicketForm = ({ addTicket }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addTicket({ title });
        setTitle("");
    };

    return (
        <Box mb={4}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <FormControl>
                        <FormLabel>Título</FormLabel>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título do ticket"
                        />
                    </FormControl>
                    
                    <Button type="submit" colorScheme="teal">
                        Adicionar Ticket
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default NewTicketForm;
