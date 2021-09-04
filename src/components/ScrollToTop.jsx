import React, {useState} from "react";

const ScrollToTop= ()=>{
    const [scrollTop, setScrollTop] = useState(false);

  window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 100){
      setScrollTop(true);
    }else{
        setScrollTop(false);
    }
  });
    return(
        <div>
            <button className={scrollTop ? "scrollBtn active" : "scrollBtn"}><i class="fas fa-angle-double-up custom-icon"></i></button>
        </div>
    );
}

export default ScrollToTop;