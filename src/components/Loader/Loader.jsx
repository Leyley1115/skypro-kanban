export const Loader = ({width = 230, height = 30, color = 'grey', bottom = 0, left = 0, top = 0, rad = 30}) => {
    return(
        <div 
        className = "loader"
        style = {{
            width: width+'px', 
            height: height+'px', 
            background: color, 
            marginBottom: bottom +'px',
            marginLeft: left+'px',
            marginTop: top+'px',
            borderRadius: rad+'px'
        }}
        >
        </div>
    )
}