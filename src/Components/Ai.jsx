function Ai({image}) {
  return (
    <div className=' flex justify-center items-center mt-10'>
        {image && <img className='h-[400px] w-[400px] rounded-2xl shadow-2xl' src={image} alt="Generated" />}
    </div>
  )
}

export default Ai
