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
        setTimeout(()=>{
            alert("GRACIAS POR USAR NUESTRO TIMER PARA FBI, puede volver a usarlo sin recargar la app.")
        }, 9000)
    }

    return (
        <> 
            <h1 style={{fontSize:'5rem'}} > - Timer para FBI - </h1>
            <p style={{color: 'red', fontSize: '2rem'}}>¿¿¿ ESTAN LISTOS TIRADORES ???</p>
            <p  >Luego de dar click a INICIAR, en pocos segundos comienza el contador.  </p>
            <h2>Tiempo</h2>
            <h3 style={{fontSize:'3rem', color: 'green'}}>{tiempoSeg}:{tiempoSeg >= 4 ? '0' : tiempoMil}</h3>
            <button onClick={click} style={{padding:'2rem 6rem 2rem 6rem', fontSize: '2rem'}}> INICIAR  </button>
            
        </>
    )
}

export default Bip