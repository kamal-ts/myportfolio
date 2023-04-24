/* eslint-disable jsx-a11y/anchor-is-valid */

function skills() {
  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center mb-16'>
          <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Skills</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>Skill Yang Dikuasai</h2>
          <p className='font-medium text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
        </div>
      </div>
      <div className='w-full px-4 py-4 font-semibold'>
        {/* programing langue */}
        <div className="w-full mb-4">
          <div className='flex flex-row w-full items-center'>
            <h2 className='flex-shrink-0 font-bold text-lg'>Programing Langue</h2>
            <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full py-4">
            <div className="py-1 text-center rounded-full border-[3px] border-[#3178c6] text-white bg-[#3178c6]">TypeScript</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#f7e018] text-dark bg-[#f7e018]">Javascript</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#8a93be] text-dark bg-[#8a93be]">PHP</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#0c8cc4] text-[#ec2025] bg-white">Java</div>
            {/* <div className="py-1 text-center rounded-full border-[3px] border-[#0c8cc4]  text-[#ec2025] bg-white">Java</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#0c8cc4]  text-[#ec2025] bg-white">Java</div>           */}
          </div >
        </div>
        {/* backend */}
        <div className="w-full mb-4">
          <div className='flex flex-row w-full items-center'>
            <h2 className='flex-shrink-0 font-bold text-lg'>Backend</h2>
            <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full py-4">
            <div className="py-1 text-center rounded-full border-[3px] border-[#6aa75c] text-[#303030] bg-[#6aa75c]">NodeJs</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#6aa75c] text-[#303030] bg-[#ffffff]">ExpressJs</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#ee4323] text-white bg-[#ee4323]">Codeighniter</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#e0234e] text-white bg-[#e0234e]">NestJs</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#000000] text-white bg-[#000000]">NextJs</div>
          </div >
        </div>
        {/* frontend */}
        <div className="w-full mb-4">
          <div className='flex flex-row w-full items-center'>
            <h2 className='flex-shrink-0 font-bold text-lg'>Frontend</h2>
            <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full py-4">
            <div className="py-1 text-center rounded-full border-[3px] border-[#00d8ff] text-[#00d8ff] bg-[#222222]">ReactJs</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#35bef8] text-[#303030] bg-[#35bef8]">Tailwindcss</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#000000] text-white bg-[#000000]">NextJs</div>
          </div >
        </div>
        {/* database dan orm */}
        <div className="w-full mb-4">
          <div className='flex flex-row w-full items-center'>
            <h2 className='flex-shrink-0 font-bold text-lg'>Database & ORM</h2>
            <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full py-4">
            <div className="py-1 text-center rounded-full border-[3px] border-[#00678c] text-[#cc8b29] bg-[#ffffff]">MySQL</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#07ac4f] text-white bg-[#07ac4f]">MongoDB</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#3f7ca4] text-white bg-[#3f7ca4]">PostgreSQL</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#3dcc8c] text-[#3dcc8c] bg-[#161616]">Supabase</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#8a0606] text-white bg-[#8a0606]">Mongoose</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#0c344b] text-white bg-[#0c344b]">Prisma</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#1294d4] text-[#2f406a] bg-[#ffffff]">Sequelize</div>
          </div >
        </div>

        <div className="w-full mb-4">
          <div className='flex flex-row w-full items-center'>
            <h2 className='flex-shrink-0 font-bold text-lg'>Mobile</h2>
            <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full py-4">
            <div className="py-1 text-center rounded-full border-[3px] border-[#42de89] text-[#103b4c] bg-[#42de89]">Android Studio</div>
            <div className="py-1 text-center rounded-full border-[3px] border-[#00d8ff] text-[#00d8ff] bg-[#222222]">React Native</div>
          </div >
        </div>

      </div>
    </div>
  )
}

export default skills