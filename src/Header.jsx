import React from "react";
import { useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Header() {
  const [s, setS] = React.useState(0);
  const [st, setSt] = React.useState(0);
  const [c,setC]=React.useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY);
    if (scrollY < 200) {
      setS(0);
    } else if (scrollY >= 200 && scrollY < 2970) {
      setS(1);
    }
    if(scrollY<1000){
      setSt(5);
    } 
    if (scrollY>=1000 && scrollY < 1700) {
      setSt(1);
    }
    else if (scrollY >= 1700 && scrollY < 2700) {
      setSt(2);
    }
    else if (scrollY >= 2700 && scrollY < 3100) {
      setSt(3);
    }
    else if (scrollY >= 3100) {
      setSt(4);
    }

  };
  const s5 = st==5?{borderBottom:"2px solid white",color:"white"}:{color:"black"}
  const s1 = st==1?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}
  const s2 = st==2?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}
  const s3 = st==3?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}
  const s4 = st==4?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}

  const nav = s === 1
  ? {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "white",
      background: "rgba(231, 227, 227, 0.35)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(6.5px)",
      webkitBackdropFilter: "blur(11px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      zIndex: 999,
    }
  : {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "",
      paddingTop: '20px',
      zIndex: 999,
    };

  return (
    <>
    <div style={{position:"sticky",zIndex:"5 ",top:0,backgroundColor:"",paddingTop:"0px"}} >
      <header class="w-full h-20 flex justify-center absolute " style={nav}>
        <nav class="w-4/5 flex justify-between items-center font-bebas">
          <h1 class="text-3xl uppercase">SPARK REACH MEDIA</h1>
          <ul class="md:flex gap-x-5 text-xl hidden">
          <Link activeClass='active' to='introlink' spy={true} smooth={true} offset={0} duration={500}>
              <li class="cursor-pointer">
                <div style={s5}>Home</div>
              </li>
          </Link>
            <Link activeClass='active' to='aboutlink' spy={true} smooth={true} offset={0} duration={500}>
              <li class="cursor-pointer">
                <div style={s1}>About Us</div>
              </li>
            </Link>
            {/* <Link activeClass='active' to='movielink' spy={true} smooth={true} offset={-80} duration={500}>
              <li class="cursor-pointer">
                <div style={s2}>Our Movies</div>
              </li>
            </Link> */}
            <Link activeClass='active' to='servicelink' spy={true} smooth={true} offset={-100} duration={500}>
              <li class="cursor-pointer">
                <div style={s3}>Services</div>
              </li>
            </Link>
            <Link activeClass='active' to='contactlink' spy={true} smooth={true} offset={0} duration={500}>
              <li class="cursor-pointer">
                <div style={s4}>Contact Us</div>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
    </>
  );
}
