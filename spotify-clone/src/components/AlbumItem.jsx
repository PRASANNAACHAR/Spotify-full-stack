// import React from 'react'

// const Albumitem = ({image, name, desc,id}) => {
//   return (
//     <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
//       <img className='rounded' src={image} alt="" />
//       <p className='font-bold mt-2 mb-1.5'>{name}</p>
//       <p className='text-slate-200 text-sm'>{desc}</p>
//     </div>
//   )
// }

// export default Albumitem



import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  const handleAlbumClick = () => {
    navigate(`/album/${id}`);
  }

  return (
    <div
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
      onClick={handleAlbumClick}
    >
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1.5'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem;
