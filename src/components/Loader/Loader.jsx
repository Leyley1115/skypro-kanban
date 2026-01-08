export const Loader = ({width = 230, height = 30, color = 'grey', bottom = 0, left = 0, top = 0, rad = 30}) => {
    return(
        <div 
        className = "loader"
        style={{
        width: width + "px",
        height: height + "px",
        marginBottom: bottom + "px",
        marginLeft: left + "px",
        marginTop: top + "px",
        borderRadius: rad + "px",

        background: `linear-gradient(
          90deg,
          #e0e0e0 0%,
          #f5f5f5 50%,
          #e0e0e0 100%
        )`,
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}>

        <style> 
            {` 
            @keyframes shimmer { 
                0% { background-position: -200px 0; } 
                100% { background-position: 200px 0; } 
                } `
            } 
        </style>
        </div>
    )
}