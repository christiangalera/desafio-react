import {
    Box,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Button,
    Select
  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"

function Form() {
    const [paises, setPaises] = useState([]);
    const [cidades, setCidades] = useState([]);


    useEffect(() => {
        axios.get('https://amazon-api.sellead.com/country').then(response => {
            setPaises(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get('https://amazon-api.sellead.com/city').then(response => {
            setCidades(response.data);
        })
    }, [])

    return (
        <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="Nome">Nome Completo</FormLabel>
                <Input id="nome" placeholder="Insira seu nome completo"/>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Insira seu melhor email"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input id="telefone" type="number" placeholder="Insira seu telefone (somente números)"/>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input id="cpf" type="number" placeholder="Insira seu CPF (somente números)" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="">País</FormLabel>
                <Select name="pais" id="pais">
                    <option value="0">Selecione seu país</option>
                    {paises.map(pais => (
                        <option key={pais.id} value={pais.a}>{pais.nome}</option>
                    ))}
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel>Cidade</FormLabel>
                <Select name="cidade" id="cidade">
                    <option value="0">Selecione sua cidade</option>
                    {cidades.map(cidade => (
                        <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
                    ))}
                </Select>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="teal.600"
                color="white"
                fontWeight="bold"
                fontSize="x1"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
    )
}

export default Form;