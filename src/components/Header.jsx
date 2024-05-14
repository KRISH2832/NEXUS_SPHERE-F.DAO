import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5 bg-#1C1B22 text-white shadow-lg fixed top-0 left-0 right-0 sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
    >
      <Link
        to={'/'}
        className="flex flex-row justify-start items-center space-x-3"
      >
        <Logo />
        <span className="text-5xl tracking-tight bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">NEXUS SPHERE</span>
      </Link>


      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-blue-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-violet-400 to-violet-800
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:from-violet-500 hover:to-violet-900"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
