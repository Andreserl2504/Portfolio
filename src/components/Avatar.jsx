export function Avatar({ src }) {
  return (
    <div className='avatar-img-container'>
      <img
        className='avatar-img'
        src={
          src
            ? src
            : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
        }
        alt=''
      />
    </div>
  )
}
