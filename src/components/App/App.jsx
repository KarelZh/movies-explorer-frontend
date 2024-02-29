import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Navigate from '../Navigate/Navigate';
import { useState } from 'react';


function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleEditMenuClick() {
    setIsOpenMenu(true)
  }
  function closePopup() {
    setIsOpenMenu(false)
  }

  return (
    <>
    <Navigate isOpen={isOpenMenu} onClose={closePopup} />
    <Routes>
      <Route path='/' element={<Main 
        onEditMenu={handleEditMenuClick}
      />} />
      <Route path='/movies' element={<Movies onEditMenu={handleEditMenuClick}/>} />
      <Route path='/saved-movies' element={<SavedMovies onEditMenu={handleEditMenuClick}/>} />
      <Route path='/profile' element={<Profile onEditMenu={handleEditMenuClick}/>} />
      <Route path='/signup' element={<Register />} />
      <Route path='/signin' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
