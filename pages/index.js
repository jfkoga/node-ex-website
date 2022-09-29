import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/afrodancer01.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
       <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            darkomedia
          </Heading>
          <p>DJ/Designer </p>
          
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/darkomedia.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          DJ
        </Heading>
        <Paragraph>
            darkomedia nace conceptualmente en los 2000, aunque la curiosidad musical llenó mis estanterías desde mi más temprana infancia: cassettes de R&B, rap, maxmix, postpunk y techno.
            Por el 2005, al entrar a gestionar el bar musical <i>Funàmbul (L'Hospitalet)</i>, me hago cargo de la producción de la actividad cultural. Con el objectivo de darle al local 
            una identidad propia, se define un concepto sonoro basado en hilos musicales de <i>funk, soul, electronica ambiental y bandas sonoras</i>. 
            La continua interacción con los djs y colectivos que actuarán en el local, me permiten conocer otros estilos, profundizando especialmente en sonidos <i>garage, surf rock, northern soul, early reggae y ska.</i> 
        </Paragraph>   
        <br/>
        <Paragraph>         
          En 2009 paso a formar parte de la cabina en la sala 
          <NextLink href="https://www.salamandra.cat" passHref>
            <Link target="_blank"> Salamandra</Link>
          </NextLink>
           , como dj residente. Única en su especie por el eclecticismo y el espíritu innovador de sus sesiones, la sala resulta una auténtica enciclopedia de géneros musicales: desde <i>indie</i> y <i>electrónica alternativa</i>, hasta <i>global grooves</i>:<i>cumbia, reggae, rumba, brazil y latin</i>. Mantendrá su residencia hasta 2016.
        </Paragraph>       
        <br/>
        <Paragraph>        
            La incorporación como percusionista a la banda <i>Mampön</i> en 2012, introduce un nuevo universo sonoro a su maleta personal: <i>afrobeat, afrofunk y jazz etíope</i>.
        </Paragraph>
        <br/>
        <Paragraph>        
            En paralelo a la residencia en <i>Salamandra</i>, continué pinchando en diversos locales: <i>Depósito Legal</i> <i>La Resistencia</i>, <i>Lennon's</i> (L'Hospitalet), <i>Arrikitown (Cornellà)</i>...
            Colaboré con el colectivo <i>Back To The Sixties Jungle</i>, especialistas en sonidos de los <i>60</i> y adictos al vinilo, pinchando en las fiestas que mensualmente celebraban en los locales <i>Barbara Ann y Sala Upload</i>.
            De 2014 a 2016 estuve pinchando asiduamente en <i>Balboa (Sabadell)</i>, y visité puntualmente espacios como <i>La Masia</i>.
        </Paragraph>
        <br/>
        <Paragraph>        
        He participado en diversas ediciones del evento <i>L'Hospitalet Experience</i>, dentro del marco del <i>Mobile World Congress Barcelona</i>. Más recientemente, he amenizado diversas veladas gastronómicas del restaurante <i>Centric (El Prat)</i>.
        </Paragraph>

      
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/darkomedia1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @darkomedia
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/darkomedia" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @darkomedia
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

