import Peliculas from './Peliculas';
import firebase from '../../Config/firebase'
import Footer from '../../Components/Footer';

export default function Home(){
    console.log('FIREBASE',firebase)
    return (
        <>
        <Peliculas/>
        <Footer/>
        </>
    )
}