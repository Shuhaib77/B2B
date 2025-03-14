import React from 'react'

function Banner({color}:{color:any}) {
  return (
    <div>
       <div style={{backgroundColor:color}} className="w-[100vw] h-[95vh] bg-blue-400 ">
        {/* <img src="https://media.licdn.com/dms/image/v2/C5112AQGb14hdNPOx2g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1574766768771?e=2147483647&v=beta&t=dEHM-smDwRgwqjVyCvR-eppr-cWe5O5RMGlFsieYf-s" className="w-full h-full object-cover" alt="" /> */}

      </div>
    </div>
  )
}

export default Banner