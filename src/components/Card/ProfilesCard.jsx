import React from 'react'

const ProfilesCard = ({name, avatar, character}) => {
  return (
    <div className='flex flex-col w-44 bg-white shadow-xl  rounded-lg mb-4'>
      <div className='w-44 h-48 overflow-x-hidden rounded-lg'>
        <img
            src={`https://image.tmdb.org/t/p/w200${avatar}`}
            alt={name}
            className="w-full h-full "
          />
      </div>
      <div className="p-2">

      <h1 className='text-lg font-bold'>{name}</h1>
      <p>{character}</p>
      </div>
    </div>
  );
}

export default ProfilesCard
