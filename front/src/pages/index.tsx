import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useDisconnect } from 'wagmi'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/context/globalContext';
import Head from 'next/head';
import Matrix from '@/matrix';
import InteractButton from '@/connect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext)
  const [getStatus, setGetStatus] = useState("Get Color")

  const numbersArray: any = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
  ];

  return (
    <main
      className={`fle mono h-screen ${inter.className}`}
    >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Geostar&family=Space+Grotesk&family=Space+Mono&display=swap" rel="stylesheet" />
      </Head>
      <div className="navbar mt-3 px-20 py-6">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">matrixPaint</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">

            {/* customized rainbow kit */}
            {!state?.connected &&
              <ConnectButton.Custom>
                {({
                  account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected = ready &&
                    account
                    &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');
                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <div className="!visible mt-2 hidden bg-[#fff] py-3 px-3 rounded-2xl text-center items-center md:mt-0 md:!flex md:basis-auto hover:cursor-pointer"
                              id="navbarSupportedContent3"
                              onClick={openConnectModal}
                              data-te-collapse-item>

                              <div className="list-style-none mr-auto flex w-full flex-col pl-0 md:flex-row"
                                data-te-navbar-nav-ref>

                                <div
                                  className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1 mx-auto"
                                  data-te-nav-item-ref>
                                  <span
                                    className="p- mono_font text-black text-xl text-center transition duration-200 hover:ease-in-out motion-reduce:transition-none md:px-2"
                                    data-te-nav-link-ref>Reshuffle</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        if (chain.unsupported) {
                          return (
                            <button onClick={openChainModal} type="button">
                              Wrong network
                            </button>
                          );
                        }
                        return (
                          <div style={{ display: 'flex', gap: 12 }} className="border rounded-2xl p-4">
                            <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center' }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }} />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>
                            <button onClick={openAccountModal} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>}

          </div>
        </div>
      </div>

      <div className="bg-whit w-full md:max-w-2xl rounded-xl mx-auto">
        <div>
          <div className="container mx-auto mt-8">
            <Matrix data={numbersArray} />
          </div>
        </div>
      </div>

      <div className="mx-auto flex justify-center py-8 space-x-8">
        <input type="text" placeholder="X-coordinate" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Y-coordinate" className="input input-bordered w-full max-w-xs" />
      </div>

      <InteractButton getStatus={getStatus} />





    </main>
  )
}
