import React from "react";
import { useParams } from 'react-router-dom';

function AboutPage() {
    const params = useParams();
    return (
        <div>
            Hola {params.name}
        </div>
    );
}

export default AboutPage;