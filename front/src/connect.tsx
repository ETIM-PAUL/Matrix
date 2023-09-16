import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/globalContext'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MoonLoader } from 'react-spinners';
import { readContract } from '@wagmi/core'
import { MatrixABI } from './RandomMatrix'
import { useContractRead, useContractReads, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { toast } from 'react-toastify';


const InteractButton = ({ getStatus, x, y }: any) => {
  const { state, dispatch } = useContext(GlobalContext)
  const [clicked, setClicked] = useState(false)

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: "0x0073fA7F3BC4f5EC5035B1B50c05A48b43D048eF",
        //@ts-ignore
        abi: MatrixABI?.abi,
        functionName: 'getColor',
        args: [x, y],
      }
    ],
  });

  let color = data ? data[0]?.result : "white";

  function checkBound() {
    dispatch({ type: "SET_FETCH", payload: false })

    if (x > 4 && y > 6) {
      toast.error("out of bounds")
      setClicked(false)
    }
    if (x > 4) {
      toast.error("out of bounds")
      setClicked(false)
    }
    if (y > 6) {
      toast.error("out of bounds")
      setClicked(false)
    }
    else {
      setClicked(true)
    }
  }

  useEffect(() => {
    dispatch({ type: "SET_COLOR", payload: color })
    dispatch({ type: "SET_FETCH", payload: true })
    setClicked(false)
  }, [clicked])


  return (
    <div>
      <div
        className="!visible mt-2 bg-[#eee] w-[100px] px-3 rounded-2xl text-center hover:cursor-pointer"
        id="navbarSupportedContent3"
        data-te-collapse-item>

        <div
          className="mb-4 bg-red-300 pl-2 md:mb-0 md:pl-0 md:pr-1 mx-auto"
          data-te-nav-item-ref>
          <span
            onClick={() => { checkBound() }}
            className="p- mono_font text-white text-xl text-center transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
            data-te-nav-link-ref>
            {isLoading && <MoonLoader
              color={"#ffffff"}
              size={20} />}
            <span>
              {getStatus}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default InteractButton