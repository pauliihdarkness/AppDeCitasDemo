import { useEffect, useState } from 'react';
import axios from 'axios';

const PopUpLocation = () => {
    const [ciudad, setCiudad] = useState("tu zona");

    useEffect(() => {
        
        const obtenerCiudad = async () => {
            try {
                const res = await axios.get("https://ip.guide/frontend/api");
                const ciudadApi = res.data?.ip_response?.location?.city;
                setCiudad(ciudadApi || "tu zona");
                console.log(res.data?.ip_response?.location);
            } catch (error) {
                console.error("Error al obtener la ciudad:", error);
                setCiudad("tu zona");
            }
        };

        obtenerCiudad();

    }, []);

    return (
        <>
            <p>María está en <strong>{ciudad}</strong> y quiere conocerte 😉</p>
        </>
    )
}

export default PopUpLocation
