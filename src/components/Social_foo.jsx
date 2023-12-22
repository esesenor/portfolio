const Social_foo = () => {

  return (
    <div className=' grid grid-cols-5 gap-1 w-[310px] h-[46px] rounded-full p-2
    bg-white/40'>

      <div className='w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600'>
        <a href='https://api.whatsapp.com/send?phone=573194682210'>
          <img className='' src="/wapp.png" alt="" />
        </a>
      </div>

      <div className='w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600'>
        <a>
          <img className='' src="/google.png" alt="" />
        </a>
      </div>

      <div className='w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600'>
        <a>
          <img className='' src="/li.png" alt="" />
        </a>
      </div>

      <div className='w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600'>
        <a>
          <img className='' src="/t.png" alt="" />
        </a>
      </div>

      <div className='w-[30px] h-[30px] rounded-xl bg-transparent p-1 mx-auto
      hover:bg-gradient-to-tr hover:from-orange-500 hover:via-[#DAA520] hover:to-red-600'>
        <a>
          <img className='' src="/yt.png" alt="" />
        </a>
      </div>

    </div>
  )
}

export default Social_foo
