import React from "react"

const NewsArticle = (props) => {
    const {title,pubDate,link,description} = props

    const backgroundStyle = {
        height : '250px', 
        backgroundSize : 'cover', 
        backgroundPosition : "0% 25%" ,
        width:'600px'
    }

    const anchorStyle = {
        textDecoration : 'none',
        color : 'white'
    }
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block border-dark mt-3 shadow my-3 mx-3 px-2 py-2 col-sm-6" style={backgroundStyle}>
            <div className="card-img-overlay" >
                <h5 className="card-title">{title}</h5>
                <div className="d-flex flex-column justify-content-between" style={{height : "90%"}}>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">Published : {pubDate?.split('T').join(' at ')} +5:30 IST</p>
                        <span className="btn btn-danger btn-sm">
                            <a  target="_blank" 
                                href={link} 
                                style={anchorStyle}
                                rel="noreferrer"
                            >details
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle