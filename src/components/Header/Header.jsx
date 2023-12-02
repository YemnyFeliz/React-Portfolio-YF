import styles from './Header.module.css';
import { Container, Row, Col, Image } from "react-bootstrap";
// import { getImageUrl } from '../../utils';
import profilePic from '../../assets/profilepic.png'

export const Header = () => {
    return (

        <>
            <div className='header-wraper'>
                <div className='main-info'>
                    <h1>Full Stack Web Developer</h1>
                    <p> Hi, I'm Yemny Feliz, an enthusiastic developer with backend and frontend experience </p>
                </div>
            </div>

            <Container id="about" className="about-section">
                <h2>About Me</h2>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                    <img id={styles.profileImg} src={profilePic}
                            alt='picture of me'
                            className='img-fluid rounded-circle'></img>
                    </Col>
                    <Col md={6}>
                        <h3>Welcome!</h3>
                        <p>I am a developer who enjoys learning new things and taking up new challenges.
                            I started this journey because I was curious about how web applications are built. Therefore, I enrolled in a full stack web deveoping program and I was immediately fascinated with all the great things one can create.
                            I am excited to keep learning about the latest technologies that not only are fun but also solve problems and make development user-friendlier.
                        </p>
                    </Col>
                </Row>
            </Container>


        </>
    )

}



export default Header