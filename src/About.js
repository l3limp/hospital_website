import {Card, CardBody, image, Stack, Heading, Text, Image, Divider, ButtonGroup, Button, CardFooter} from '@chakra-ui/react';
import './App.css';
import Dadu from './map.png';
function About() {
    return (
        <div className = "Cards" id = "about">
            <div className = "Cards-Row">
            <Card maxW='320px' margin = {'10px'}>
                <CardBody className = 'Cards-white-bg'>
                    <Image
                    src='https://media.licdn.com/dms/image/C4D03AQEvp0HvuZ_QFA/profile-displayphoto-shrink_400_400/0/1644577557784?e=1678924800&v=beta&t=7F-SGRsWiabyA6T93UYIM8TCsd1yjTEdhD627U9g3C0'
                    alt='Dr OP Kakar'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Dr OP Kakar</Heading>
                    <Text>
                        doctor
                    </Text>
                    <Text fontSize = {'xs'} className= "Card-Descrip">
                    A premium set of React components and flows for eCommerce, Marketing and Dashboards. Made by the creators of Chakra UI.
                    </Text>
                    
                    </Stack>
                </CardBody>  
            </Card>    

            <Card maxW='320px' margin = {'10px'}>
                <CardBody className = 'Cards-white-bg'>
                    <Image
                    src='https://media.licdn.com/dms/image/C4D03AQEvp0HvuZ_QFA/profile-displayphoto-shrink_400_400/0/1644577557784?e=1678924800&v=beta&t=7F-SGRsWiabyA6T93UYIM8TCsd1yjTEdhD627U9g3C0'
                    alt='Dr OP Kakar'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Dr OP Kakar</Heading>
                    <Text>
                        doctor
                    </Text>
                    <Text fontSize = {'xs'} className= "Card-Descrip">
                    A premium set of React components and flows for eCommerce, Marketing and Dashboards. Made by the creators of Chakra UI.
                    </Text>
                    
                    </Stack>
                </CardBody>  
            </Card>    

            <Card maxW='320px' margin = {'10px'}>
                <CardBody className = 'Cards-white-bg'>
                    <Image
                    src='https://media.licdn.com/dms/image/C4D03AQEvp0HvuZ_QFA/profile-displayphoto-shrink_400_400/0/1644577557784?e=1678924800&v=beta&t=7F-SGRsWiabyA6T93UYIM8TCsd1yjTEdhD627U9g3C0'
                    alt='Dr OP Kakar'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Dr OP Kakar</Heading>
                    <Text>
                        doctor
                    </Text>
                    <Text fontSize = {'xs'} className= "Card-Descrip">
                    A premium set of React components and flows for eCommerce, Marketing and Dashboards. Made by the creators of Chakra UI.
                    </Text>
                    
                    </Stack>
                </CardBody>  
            </Card>    
            </div>

            <div>
                <Text className = "title" color={'black'} padding = {'5vh'}><center>  
                A team of dedicated professionals</center>
                </Text>
            </div>                  
            
            <div className = 'Footer'>
                
                <div>
                    <Text>
                        +91 999999999
                    </Text>
                    <Text>
                        +91 999999999
                    </Text> 
                </div>
                
                <div>
                    <Text>
                        Kakar Hospital, Budhlada Road, Dera Surjanhar, Ratia, Haryana 125051
                    </Text>
                </div>
                
            </div>
                
        </div>
    );
}

export default About;