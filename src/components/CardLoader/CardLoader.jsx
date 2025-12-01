import { Loader } from "../Loader/Loader"

export const CardLoader = () => {
    return(
        <div className = "card-loader"
        style={{position: 'relative'}}
        >
            <div className="loader-wrapper"
            style ={{position: 'absolute'}}
            >
                <Loader width={180} left={15} top={24} bottom={40}/>
                <Loader width={100} height={16} left={15}/>
            </div>
            <Loader width={220} height={130} color = '#d1d1d1' bottom={10} rad={10}/>
        </div>
    )
}