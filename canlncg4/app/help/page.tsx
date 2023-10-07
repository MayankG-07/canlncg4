"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,

  Button,
  Stack,
  Box,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
} from "@chakra-ui/react";
// import { Search2Icon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@styles/home.module.css";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Help = () => {
  return <><Card sx={{mt:5, mx:7}}>
        <CardHeader>
    <Text sx={{fontSize: 30}}>
    Help Section
    </Text></CardHeader><CardBody>
        <OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
<br />
<br />
 <Stack direction="row">
        <Card sx={{ mt: 5, ml: 7, mr: 5, width: "100%" }}>
          <CardHeader sx={{ fontSize: 25, textAlign: "center" }}>
            {/* Human - Male */}
          </CardHeader>
          <CardBody>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                mx: 0
              }}
              className={styles.parent}
            >
              <img src="/help1.jpg" alt="help1" width="100%" />
            </Box>
          </CardBody>
        </Card>

      </Stack>
       <Stack direction="row">
        <Card sx={{ mt: 5, ml: 7, mr: 5, width: "100%" }}>
          <CardHeader sx={{ fontSize: 25, textAlign: "center" }}>
            {/* Human - Male */}
          </CardHeader>
          <CardBody>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                mx: 0
              }}
              className={styles.parent}
            >
              <img src="/help2.jpg" alt="help1" width="100%" />
            </Box>
          </CardBody>
        </Card>

      </Stack>
       <Stack direction="row">
        <Card sx={{ mt: 5, ml: 7, mr: 5, width: "100%" }}>
          <CardHeader sx={{ fontSize: 25, textAlign: "center" }}>
            {/* Human - Male */}
          </CardHeader>
          <CardBody>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                mx: 0
              }}
              className={styles.parent}
            >
              <img src="/help3.jpg" alt="help1" width="100%" />
            </Box>
          </CardBody>
        </Card>

      </Stack>
       <Stack direction="row">
        <Card sx={{ mt: 5, ml: 7, mr: 5, width: "100%" }}>
          <CardHeader sx={{ fontSize: 25, textAlign: "center" }}>
            {/* Human - Male */}
          </CardHeader>
          <CardBody>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                mx: 0
              }}
              className={styles.parent}
            >
              <img src="/help4.jpg" alt="help1" width="100%" />
            </Box>
          </CardBody>
        </Card>

      </Stack>

          <Stack direction="row">
        <Card sx={{ mt: 5, ml: 7, mr: 5, width: "100%" }}>
          <CardHeader sx={{ fontSize: 25, textAlign: "center" }}>
            {/* Human - Male */}
          </CardHeader>
          <CardBody>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                mx: 0
              }}
              className={styles.parent}
            >
              <img src="/help5.jpg" alt="help1" width="100%" />
            </Box>
          </CardBody>
        </Card>

      </Stack>
          
      
        </CardBody></Card></>
};

export default Help;
