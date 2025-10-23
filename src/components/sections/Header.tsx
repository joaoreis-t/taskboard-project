import { useEffect } from 'react'

import { useTheme } from '../../context/ThemeContext'

import profileImg from '../../assets/profile-img.png'
import darkModeIcon from '../../assets/darkMode-moon.png'
import lightModeIcon from '../../assets/lightMode-sun.png'

export const Header = () => {
  const { isLight, setIsLight } = useTheme();

  useEffect(() => {
    if(isLight){
      document.documentElement.classList.remove("dark");
    } else{
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem('theme', JSON.stringify(isLight));
  }, [isLight])

  return(
    <header className='bg-[#3979F7] p-6 h-50 lg:h-[clamp(93px,8vh,200px)]' style={{ transition: 'height 0.3s ease' }}>
      <div className="grid max-w-[900px] mx-auto grid-cols-2 lg:grid-cols-3 items-center ">
        <div className="flex items-center gap-2.5">
          <img
            src={profileImg}
            alt="Foto de Perfil"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-xl text-white">Olá, User</p>
        </div>

        <h1 className="hidden lg:block text-white text-2xl font-semibold text-center">
          TaskBoard
        </h1>

        <div onClick={()=> setIsLight(!isLight)} className="flex justify-end">
          {
            isLight ? (
              <img src={darkModeIcon} alt="modo escuro" className="w-[35px] h-[35px] object-contain" />
            ) : (
              <img src={lightModeIcon} alt="modo claro" className="w-[35px] h-[35px] object-contain" />
            )

          }
        </div>
      </div>
    </header>
  );
}