import useSound from 'use-sound';
import BipSound from '/src/assets/sound/BipSound.mp3';
import { useState } from 'react';



function Bip() {

    const [tiempoSeg, setTiempoSeg] = useState (null)
    const [tiempoMil, setTiempoMil] = useState (null)
    const [playSound] = useSound(BipSound)

    const iniciar = () => {
        setTimeout(playSound, 4000)
        setTimeout(playSound, 8000)
    }

    const contador = () => {
        const intervalSeg = setInterval(() => {
            setTiempoSeg(prev => {
                if (prev >= 4) {
                    clearInterval(intervalSeg)
                    clearInterval(intervalMil)
                    return prev
                }
                return prev + 1
            })
        }, 1000)

        const intervalMil = setInterval(() => {
            setTiempoMil(prev => (prev + 1) % 100)
        }, 10)
    }

    const click = () =>{
        setTiempoMil(0)
        setTiempoSeg(0)
        iniciar()
        setTimeout(contador, 4000)
    }

    return (
        <> 
            <h1> - Timer para FBI - </h1>
            <h2>Tiempo</h2>
            <h3>{tiempoSeg}:{tiempoSeg >= 4 ? '0' : tiempoMil}</h3>
            <button onClick={click} > sonar </button>
        </>
    )
}

export default Bip