import { setGlobalState } from '../store'
import { BsPlusLg } from 'react-icons/bs'

const AddButton = () => {
  return (
    <div className="fixed right-10 bottom-10 flex space-x-2 justify-center">
      <button
        type="button"
        className="flex justify-center items-center w-9 h-9 bg-gradient-to-r from-violet-400 to-violet-800
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:from-violet-500 hover:to-violet-900"
        onClick={() => setGlobalState('createModal', 'scale-100')}
      >
        <BsPlusLg className='font-bold' size={20} />
      </button>
    </div>
  )
}

export default AddButton
