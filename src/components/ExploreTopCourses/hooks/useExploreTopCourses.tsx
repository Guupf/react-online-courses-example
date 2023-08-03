import { useEffect, MouseEvent, useState } from "react";


export function useExploreTopCourses() {
    const [currentItem, setCurrentItem] = useState(0)
            const items = document.querySelectorAll(".item");
        const maxItems = items.length - 1;
    function handleSwitchButton(direction: "left" | "right") {
        if (direction === "left") {
            return setCurrentItem((prev)=> prev === 0 ? 0 : prev-1)
        }
        return setCurrentItem((prev)=> prev === maxItems ? prev : prev + 1)
    }
    
    useEffect(() => {
        const items = document.querySelectorAll(".item");
        if (!items) return;
        items.forEach((item)=>item.classList.remove("current"))
        items[currentItem].scrollIntoView({
              behavior: "smooth",
              inline: "center", block:"nearest"
            }); 
            items[currentItem].classList.add("current");
      }, [currentItem]);
    return {handleSwitchButton} 
}
