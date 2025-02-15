import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.jsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import CartProvider from './providers/CartProvider/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={routes} />
            </CartProvider>
        </AuthProvider>
    </React.StrictMode>
);
