
import sprite from "../../img/symbol-defs.svg";
import {ButtonScrollWrapper} from "./ButtonScrollStyled";
import {makeScroll} from "./makeScroll";

const ButtonScroll = ({direction,ulWithScrollRef,scrollLength}) =>{

    const handleScroll = (event) => {
        const {id} = event.target
        makeScroll(id,ulWithScrollRef,scrollLength)
    }
        return (
            <ButtonScrollWrapper id={direction} onClick={handleScroll}>
                <svg className="buttonArrowSvg">
                    <use xlinkHref={sprite + `#icon-arrow-${direction}`}/>
                </svg>
            </ButtonScrollWrapper>
        );
}

export default ButtonScroll;