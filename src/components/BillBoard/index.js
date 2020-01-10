import React from 'react'
//
const events = [
  {
    name: '4.22 地球日',
    time: '4月22日',
    description:
      '地球日前50間店鋪加入，走塑義工與捐助者一起在地球日走塑嘉年華階段性慶祝活動'
  },
  {
    name: '4.22 地球日',
    time: '4月22日',
    description: ''
  },
  {
    name: 'Plastic Free Month',
    time: '4月22日',
    description: ''
  },
  {
    name: '年終感謝',
    time: '12月',
    description: '完成1,000間目標，大埔成為走塑社區'
  }
]
//
export default props => {
  return (
    <section className='section'>
      <p className='title'></p>
      <p>
        號召更多同行、有心人堅持日常走塑，與我們一起在2020年，和學校合辦走塑學堂與社區走塑體驗活動、並與區議員合作，和學生、義工一起遊說全港1,000間店鋪加入走塑行列，以及令大埔成為下一個走塑模範社區，讓香港向走塑城市的目標邁進！
      </p>
    </section>
  )
}
