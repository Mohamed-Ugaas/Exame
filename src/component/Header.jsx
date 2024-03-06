

function Header (){
    return <div>
    <div className="bg-yellow-300 h-[800px]">
       <div className=" flex justify-between p-6">
        <h1 className="text-5xl">Code Xalka</h1>
        <i class="fa-solid fa-bars text-4xl sm:hidden"></i>
        <ul className="sm:flex hidden gap-8 text-3xl ">
            <li>Home</li>
            <li>About Us</li>
            <li>Contect us</li>
        </ul>
       </div>

       <div>
        <h1 className="sm:text-[120px] text-[60px] font-bold ml-[70px] pt-[60px]">You Dream And We Build</h1>
        <p className="ml-[70px] text-3xl mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, rem.</p>
        <button className="ml-[70px] px-20 py-10 text-2xl bg-white">Explore more</button>
       </div>
    </div>
      
      

    </div>
}

export default Header