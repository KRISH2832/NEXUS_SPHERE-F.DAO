import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-rgb(28, 27, 34) text-white py-24 px-6 ">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <br />
        <br />
        <span className="capitalize text-black">Empower creative projects through</span>
        <br />
        <span className="uppercase text-violet-400">Nexus Sphere's Funding DAO.</span>

      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-violet-400 to-violet-800
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:from-violet-500 hover:to-violet-900"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Create Club
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-violet-400
        font-medium text-xs leading-tight uppercase text-violet-400
        rounded-full shadow-md bg-transparent hover:bg-violet-600
        hover:text-white"
        >
          Contribute
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-violet-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-violet-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-violet-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
