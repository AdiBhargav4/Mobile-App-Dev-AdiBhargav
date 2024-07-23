import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        if (favorites.some(item => item.name === product.name)) {
            setFavorites(favorites.filter(item => item.name !== product.name));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};