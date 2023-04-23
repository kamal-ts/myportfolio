/* eslint-disable jsx-a11y/anchor-is-valid */

function skills() {
  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center mb-16'>
          <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Skills</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>My Skills</h2>
        </div>
      </div>
      <div className='w-full px-4 py-4'>
        <div className='flex flex-row w-full items-center'>
          <h2 className='flex-shrink-0 font-bold text-lg'>Programing Langue</h2>
          <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
        </div>
        <div className="flex flex-row my-4 items-center gap-2">

        <div className="py-2 px-4 bg-green-600 w-44 text-center text-white rounded-full">ExpressJs</div>
        <div className="py-2 px-4 bg-orange-600 w-44 text-center text-white rounded-full">Codeighniter4</div>
        <div className="py-2 px-4 bg-rose-700 w-44 text-center text-white rounded-full">NestJs</div>
        </div >
      </div>
    </div>
  )
}

export default skills