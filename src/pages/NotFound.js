import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
    <div className="container mx-auto px-4 py-8 text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Page non
    trouvée</h1>
    <p className="mb-4">Désolé, la page que vous recherchez n'existe
    pas.</p>
    <Link to="/" className="text-blue-600 hover:underline">
    Retourner à l'accueil
    </Link>
    </div>
    );
    };
    export default NotFound;