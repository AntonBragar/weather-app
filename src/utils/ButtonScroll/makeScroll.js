export const makeScroll = (id,ulWithScrollRef,scrollLength=100) => {
    let lastScrollPositon = Math.floor(ulWithScrollRef.current.scrollLeft)
    const scrollRight = (length) => lastScrollPositon += length;
    const scrollLeft = (length) => lastScrollPositon -= length;

    if (id === "right") {
        scrollRight(scrollLength)
        return ulWithScrollRef.current.scrollTo({
            left: lastScrollPositon,
            behavior: "smooth"
        })
    } else if (id === "left") {
        scrollLeft(scrollLength)
        return ulWithScrollRef.current.scrollTo({
            left: lastScrollPositon,
            behavior: "smooth"
        })
    }
}