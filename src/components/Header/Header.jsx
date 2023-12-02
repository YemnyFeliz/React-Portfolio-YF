import styles from './Header.module.css';
// import { getImageUrl } from '../../utils';
import profilePic from '../../assets/profilepic.png'

export const Header = () => {
    return (
        <section>
        <h2>About</h2>
        <div className='container'>
            
            <div className={styles.content}>
                <img id={styles.profileImg} src={profilePic}
                    alt='picture of me'
                    className='img-fluid rounded-circle'></img>
                
                <div className={styles.text}>
                    <h3>Welcome!</h3>
                    <p>Hello, my name is Yemny Feliz and I am a developer who enjoys learning new things and taking up new challenges.
                        I started this journey because I was curious about how web applications are built. Therefore, I enrolled in a full stack web deveoping program and I was immediately fascinated with all the great things one can create.
                        I am excited to keep learning about the latest technologies that not only are fun but also solve problems and make development user-friendlier.
                        
                    </p>

                </div>

            </div>
        </div>
        </section>
    )

}



export default Header