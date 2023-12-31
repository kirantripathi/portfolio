import React,{useState,useEffect} from "react";
import Image from "next/image";
import NavLogo from "../public/assets/navLogo.png";
import Link from "next/link";
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail,} from "react-icons/ai"
import {FaLinkedinIn,FaGithub} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {useRouter} from "next/router";




const Navbar = () => {

  const[nav,setNav] = useState(false);
  const[shadow,setShadow] = useState(false);
  const [navBg,setNavBg] = useState("#ecfof3");
  const [linkColor,setLinkColor] = useState("#1f2937");
  const router = useRouter();

useEffect(() => {

 if(router.asPath === "/property"
 || router.asPath === "/crypto" ||
 router.asPath === "/netflix"
||router.asPath === "/twitch"
 ) {
  setNavBg("transparent")
  setLinkColor("#ecf0f3")
 }
 else {
  setNavBg("#ecf0f3");
  setLinkColor("#1f2937")
 }

},[router])

  const handleShadow = () => {
  
    if(window.scrollY>=90) {
      setShadow(true);
    }
    else {
      setShadow(false);
    }
  }

  useEffect(() => {
   
    window.addEventListener('scroll',handleShadow)
  },[])

  const handleNav = () =>  {
    setNav(!nav);
  }

  const closeNav = () => {
setNav(false)
  }

  return (
    <div 
    style={{ backgroundColor:`${navBg}` }}
    className={`fixed w-full h-20  z-[100] ${shadow &&"shadow-xl"}`}>
       <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
        
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
      
        </Link>
        <div>
          <ul style={{ color:`${linkColor}`}} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
         
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
         
      </div>
      </div>

      <div className={nav?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}>
    <div  className={nav?" fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500":
    "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
    <div>
      <div className="flex w-full  items-center justify-between">
       <Link href="/">
       <Image width="87" height="35" src={NavLogo} alt="/" />
       </Link>
        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer">
          <AiOutlineClose />
        </div>
      </div>

      <div className="border-b border-gray-300 my-4">
        <p className="w-[85%] md:w-[90%] py-4">Lets build something valuable  together</p>
      </div>
      <div className="py-4 flex flex-col   ">
       
        <ul className="uppercase">
         <Link href="/">
         <li onClick={closeNav} className="py-4 text-sm">
          Home
         </li>
         </Link>
         <Link  href="/#about">
         <li onClick={closeNav} className="py-4 text-sm">
          About
         </li>
         </Link>
         <Link  href="#/skills">
         <li onClick={closeNav} className="py-4 text-sm">
          Skills
         </li>
         </Link>
         <Link  href="/#projects">
         <li onClick={closeNav} className="py-4 text-sm">
          Projects
         </li>
         </Link>
    
         <Link  href="/#contact">
         <li onClick={closeNav} className="py-4 text-sm">
          Contact
         </li>
         </Link>
        </ul>
        <div className="pt-40">
        <p className="uppercase tracking-widest text-[#5651e5]">Lets Connect</p>
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
          
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaLinkedinIn />
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        <FaGithub />
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiOutlineMail />
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <BsFillPersonLinesFill />
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    </div>

   
  );
};

export default Navbar;
