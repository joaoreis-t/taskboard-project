import profileImg from '../../assets/profile-img.png'
import darkModeMoon from '../../assets/darkMode-moon.png'

export const Header = () => {
  return(
    <header className='bg-[#3979F7] p-6 h-50 lg:h-[clamp(93px,8vh,200px)]' style={{ transition: 'height 0.3s ease' }}>
      <div className="grid max-w-[900px] mx-auto grid-cols-2 lg:grid-cols-3 items-center ">
        <div className="flex items-center gap-2.5">
          <img
            src={profileImg}
            alt="Foto de Perfil"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-xl text-white">João Silva</p>
        </div>

        <h1 className="hidden lg:block text-white text-2xl font-semibold text-center">
          TaskBoard
        </h1>

        <div className="flex justify-end">
          <img
            src={darkModeMoon}
            alt="Notificações"
            className="w-[35px] h-[35px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}