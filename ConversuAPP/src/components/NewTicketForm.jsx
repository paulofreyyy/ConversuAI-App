import React, { useState } from "react";
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    VStack,
    Select,
    Textarea,
} from "@chakra-ui/react";

const NewTicketForm = ({ addTicket, onClose }) => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [product, setProduct] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !subject || !product || !description) return;

        addTicket({ email, subject, product, description });
        setEmail("");
        setDescription("");
        setProduct("");
        setSubject("");
        onclose();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu email"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Assunto</FormLabel>
                        <Input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Assunto do ticket"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Produto</FormLabel>
                        <Select
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            placeholder="Selecione o produto"
                        >
                            <option value={"Sistema 1"}>Sistema 1</option>
                            <option value={"Sistema 2"}>Sistema 2</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Descrição</FormLabel>
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição do ticket"
                        />
                    </FormControl>
                    
                    <Button type="submit" onClick={onClose} colorScheme="orange">
                        Adicionar Ticket
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default NewTicketForm;
