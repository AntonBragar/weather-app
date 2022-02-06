
import {ButtonScrollWrapper} from "./ButtonScrollStyled";
import {makeScroll} from "./makeScroll";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";

const ButtonScroll = ({direction, ulWithScrollRef, scrollLength}) => {

    const handleScroll = (event) => {
        const {id} = event.target
        makeScroll(id, ulWithScrollRef, scrollLength)
    }
    return (
        <ButtonScrollWrapper id={direction} onClick={handleScroll}>
            {direction === 'left'
                ? < IoIosArrowDropleftCircle />
                : < IoIosArrowDroprightCircle />
            }
        </ButtonScrollWrapper>
    );
}

export default ButtonScroll;