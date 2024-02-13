"use client"

const Square = ({value, onSquareClick}) => {
  return (
    <div onClick={()=> onSquareClick()} className='flex justify-center items-center cursor-pointer flex-1 border-[1px] border-black text-2xl text-black'>
      {value}
    </div>
  )
}

export default Square