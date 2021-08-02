import React, { useEffect } from "react";
import {
  Flex,
  VStack,
  Heading,
  IconButton,
  Spacer,
  Stack,
  useMediaQuery,
  Circle,
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHamburger,
  FaCross,
} from "react-icons/fa";

const Top = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bgt = "transparent";
  const bg = useColorModeValue("gray.800", "white");
  const color = useColorModeValue("gray.800", "white");

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 620px)");

  return (
    <VStack p={5}>
      <Flex w="100%" alignItems="center">
        <Heading
          size="md"
          fontWeight="semibold"
          color={color}
          letterSpacing="0.05rem"
        >
          Portfolio
        </Heading>

        <Spacer></Spacer>

        {isNotSmallerScreen ? (
          <>
            <Button mr={2}>Resume</Button>
            <IconButton
              bg={bgt}
              color={color}
              ml={2}
              mr={4}
              icon={isDark ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
            ></IconButton>
          </>
        ) : (
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={!isOpen ? <FaHamburger /> : <FaCross />}
                  variant="outline"
                ></MenuButton>
                <MenuList>
                  <MenuItem onClick={toggleColorMode}>
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Resume</MenuItem>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        )}
      </Flex>

      {isNotSmallerScreen && (
        <Flex flexDirection="column" position="fixed" bottom="0" right="5%">
          <IconButton
            _hover={{ bg: bgt }}
            bg={bgt}
            color={color}
            icon={<FaInstagram />}
          ></IconButton>
          <IconButton
            _hover={{ bg: bgt }}
            bg={bgt}
            color={color}
            icon={<FaLinkedin />}
          ></IconButton>
          <IconButton
            _hover={{ bg: bgt }}
            bg={bgt}
            color={color}
            mb={3}
            icon={<FaGithub />}
          ></IconButton>
          <svg height="160" width="100">
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="160"
              style={
                isDark
                  ? { stroke: "rgb(255,255,255)", strokeWidth: 2 }
                  : { stroke: "rgb(0,0,0)", strokeWidth: 2 }
              }
            />
            Sorry, your browser does not support inline SVG.
          </svg>
        </Flex>
      )}

      <Stack>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          p={isNotSmallerScreen ? "16" : "0"}
          alignSelf="flex-start"
          spacing="100px"
        >
          <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
            <Text fontSize="3xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Manikanta Vedula
            </Text>
            <Button mt={8} colorScheme="blue">
              Hire Me
            </Button>
          </Box>
        </Flex>
      </Stack>
    </VStack>
  );
};

export default Top;
