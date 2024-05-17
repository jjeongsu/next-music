import { IconNofify } from '../../public/icon-notify'

export const Notifier = () => {
  return (
    <button className="relative mr-2 ">
      <IconNofify width={30} height={30} color={'#c4c3c3'} />
      <div className="animate-ping w-2 h-2 border-2 border-solid bg-primary rounded-full absolute top-0 right-0"></div>
      <div className=" w-2 h-2 bg-primary rounded-full absolute top-0 right-0"></div>
    </button>
  )
}
