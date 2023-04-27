/* eslint-disable jsx-a11y/anchor-is-valid */

function skills() {

  const skills = [
    {
      title: 'Programing Langue',
      data: [
        {
          name: 'TypeScript',
          bgColor: '#3178c6',
          textColor: '#ffffff',
          borderColor: '#3178c6',
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Javascript',
          bgColor: '#f7e018',
          textColor: '#0f172a',
          borderColor: '#f7e018',
          link: '#-'
        },
        {
          name: 'PHP',
          bgColor: '#8a93be',
          textColor: '#0f172a',
          borderColor: '#8a93be',
          link: '#-'
        },
      ]
    },
    {
      title: 'Backend',
      data: [
        {
          name: 'NodeJs',
          bgColor: '#6aa75c',
          textColor: '#303030',
          borderColor: '#6aa75c',
          link: 'https://nodejs.org/en'
        },
        {
          name: 'ExpressJs',
          bgColor: '#ffffff',
          textColor: '#303030',
          borderColor: '#6aa75c',
          link: 'https://expressjs.com/'
        },
        {
          name: 'Codeighniter',
          bgColor: '#ee4323',
          textColor: '#ffffff',
          borderColor: '#ee4323',
          link: 'https://codeigniter.com/'
        },
        {
          name: 'NextJs',
          bgColor: '#000000',
          textColor: '#ffffff',
          borderColor: '#000000',
          link: 'https://nestjs.com/'
        },
        {
          name: 'NestJs',
          bgColor: '#e0234e',
          textColor: '#ffffff',
          borderColor: '#e0234e',
          link: '#-'
        }
      ]
    },
    {
      title: 'Frontend',
      data: [
        {
          name: 'ReactJs',
          bgColor: '#222222',
          textColor: '#00d8ff',
          borderColor: '#00d8ff',
          link: '#-'
        },
        {
          name: 'Tailwindcss',
          bgColor: '#35bef8',
          textColor: '#303030',
          borderColor: '#35bef8',
          link: '#-'
        },
        {
          name: 'NextJs',
          bgColor: '#000000',
          textColor: '#ffffff',
          borderColor: '#000000',
          link: '#-'
        },
      ]
    },
    {
      title: 'Database & ORM',
      data: [
        {
          name: 'MySQL',
          bgColor: '#ffffff',
          textColor: '#cc8b29',
          borderColor: '#00678c',
          link: '#-'
        },
        {
          name: 'MongoDB',
          bgColor: '#07ac4f',
          textColor: '#ffffff',
          borderColor: '#07ac4f',
          link: '#-'
        },
        {
          name: 'PostgreSQL',
          bgColor: '#3f7ca4',
          textColor: '#ffffff',
          borderColor: '#3f7ca4',
          link: '#-'
        },
        {
          name: 'Supabase',
          bgColor: '#161616',
          textColor: '#3dcc8c',
          borderColor: '#3dcc8c',
          link: '#-'
        },
        {
          name: 'Mongoose',
          bgColor: '#8a0606',
          textColor: '#ffffff',
          borderColor: '#8a0606',
          link: '#-'
        },
        {
          name: 'Sequelize',
          bgColor: '#ffffff',
          textColor: '#2f406a',
          borderColor: '#1294d4',
          link: '#-'
        },
      ]
    },
    {
      title: 'Mobile',
      data: [
        {
          name: 'React Native',
          bgColor: '#222222',
          textColor: '#00d8ff',
          borderColor: '#00d8ff',
          link: '#-'
        },
      ]
    }
  ];

  return (
    <div className='container lg:px-28'>
      <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center mb-16'>
          <h4 className='font-semibold text-lg text-indigo mb-2 uppercase'>Skills</h4>
          <h2 className='font-bold text-dark text-3xl mb-4'>Skill Yang Dimiliki</h2>
          <p className='font-medium text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil asperiores dolore magnam! Autem soluta tenetur ipsa sint eum reprehenderit placeat.</p>
        </div>
      </div>
      <div className='w-full px-4 py-4 font-semibold'>
        {/* programing langue */}
        {skills.map((skill, index) => (
          <div key={index} className="w-full mb-4">
            <div className='flex flex-row w-full items-center'>
              <h2 className='flex-shrink-0 font-bold text-lg'>{skill.title}</h2>
              <div className='h-[2px]  bg-dark flex-1 ml-4'></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full py-4">
              {skill.data.map((d, index2) => (
                <a key={index2}
                  target={d.link === '#-' ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  href={d.link}
                  className="skills-list"
                  style={
                    {
                      color: d.textColor,
                      backgroundColor: d.bgColor,
                      borderWidth: 3,
                      borderColor: d.borderColor
                    }
                  }>
                  {d.name}
                </a>
              ))}
            </div >
          </div>
        ))}

      </div>
    </div>
  )
}

export default skills