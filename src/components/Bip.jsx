import useSound from 'use-sound';
import BipSound from '/src/assets/sound/BipSound.mp3';


function Bip() {

const [playSound] = useSound(BipSound)
const iniciar = () => {
    setTimeout(playSound, 4000)
    setTimeout(playSound, 8000)
}

    return (
        <div> 
            <button onClick={iniciar}> sonar </button>
        </div>
    )
}

export default Bip