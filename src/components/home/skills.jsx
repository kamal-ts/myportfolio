/* eslint-disable jsx-a11y/anchor-is-valid */
import { SiCodeigniter, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiSequelize, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'

function skills() {

  const skills = [
    {
      title: 'Programing Langue',
      data: [
        {
          name: 'TypeScript',
          icon: < SiTypescript />,
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Javascript',
          icon: < SiJavascript />,
          link: '#-'
        },
        {
          name: 'php',
          icon: < SiPhp />,
          link: '#-'
        },
      ]
    },
    {
      title: 'Backend',
      data: [
        {
          name: 'NodeJs',
          icon: < SiNodedotjs />,
          link: 'https://nodejs.org/en'
        },
        {
          name: 'ExpressJs',
          icon: < SiExpress />,
          link: 'https://expressjs.com/'
        },
        {
          name: 'Codeighniter',
          icon: < SiCodeigniter />,
          link: 'https://codeigniter.com/'
        },
        {
          name: 'NextJs',
          icon: < SiNextdotjs />,
          link: 'https://nextjs.org/'
        },
        {
          name: 'NestJs',
          icon: < SiNestjs />,
          link: 'https://nestjs.com/'
        }
      ]
    },
    {
      title: 'Frontend',
      data: [
        {
          name: 'ReactJs',
          icon: < SiReact />,
          link: '#-'
        },
        {
          name: 'Tailwindcss',
          icon: < SiTailwindcss />,
          link: '#-'
        },
        {
          name: 'NextJs',
          icon: < SiNextdotjs />,
          link: '#-'
        },
      ]
    },
    {
      title: 'Database & ORM',
      data: [
        {
          name: 'MySQL',
          icon: < SiMysql />,
          link: '#-'
        },
        {
          name: 'MongoDB',
          icon: < SiMongodb />,
          link: '#-'
        },
        {
          name: 'PostgreSQL',
          icon: < SiPostgresql />,
          link: '#-'
        },
        {
          name: 'Supabase',
          icon: < SiSupabase />,
          link: '#-'
        },
        {
          name: 'Sequelize',
          icon: < SiSequelize />,
          link: '#-'
        },
      ]
    },
    {
      title: 'Mobile',
      data: [
        {
          name: 'React Native',
          icon: < SiReact />,
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
        {skills.map((skill, index) => (
          <div key={index} className="w-full mb-4">
            <div className='flex flex-row w-full items-center'>
              <h2 className='flex-shrink-0 font-semibold text-base'>{skill.title}</h2>
              <div className='h-[1px]  bg-dark flex-1 ml-4'></div>
            </div>
            <div className="col-skills">
              {skill.data.map((d, index2) => (

                <a key={index2}
                  target={d.link === '#-' ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  href={d.link}
                  className="skills-list text-secondary hover:text-indigo bg-slate-100"
                >
                  <span className='text-4xl'>{d.icon}</span>
                  <span className='text-sm font-medium'>{d.name}</span>
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