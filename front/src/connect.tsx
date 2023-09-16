import React, { useContext } from 'react'
import { GlobalContext } from './context/globalContext'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MoonLoader } from 'react-spinners';


const InteractButton = ({ getStatus }: any) => {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <div>
      <div
        className="!visible mt-2 bg-[#eee] w-[100px] px-3 rounded-2xl text-center hover:cursor-pointer"
        id="navbarSupportedContent3"
        data-te-collapse-item>

        {/* <div
          className="list-style-none mr-auto flex w-full flex-col pl-0 md:mt-1 md:flex-row"
          data-te-navbar-nav-ref> */}

        <div
          className="mb-4 bg-red-300 pl-2 md:mb-0 md:pl-0 md:pr-1 mx-auto"
          data-te-nav-item-ref>
          <span
            className="p- mono_font text-white text-xl text-center transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
            data-te-nav-link-ref>
            {getStatus !== "Get Color" && <MoonLoader
              color={"#ffffff"}
              size={20} />}
            <span>
              {getStatus}
            </span>
          </span>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default InteractButton