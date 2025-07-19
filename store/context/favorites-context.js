import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  //This is the declaration just for auto-complete
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  //First: declare the Fav-Ids state
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  //Second: Implement eh add favorite Meals
  function addMealFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  // Third: Implement the remove Favorite meal
  function removeMealFavorite(id) {
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addMealFavorite,
    removeFavorite: removeMealFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
