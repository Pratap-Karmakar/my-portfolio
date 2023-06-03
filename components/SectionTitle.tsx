interface Props{
    title:string;
    titleno:string;
}

const SectionTitle = ({title,titleno}:Props) => {
  return (
    <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
        <span className='text-xl text-textOrange mr-2'>{titleno}</span> {title}
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-slate-700 ml-6'></span>
    </h2>
  )
}

export default SectionTitle