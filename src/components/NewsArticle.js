import React from 'react'

const NewsArticle = (props) => {
    const {title, thumbnail, description, pubDate, link} = props
    
    const backgroundStyle = {
        height : '200px', 
        backgroundImage : `url(${thumbnail ? thumbnail : 'https://static.apkdone.me/wp-content/uploads/2020/11/News-by-The-Times-of-India-Newspaper-poster.jpg'})`, 
        backgroundSize : 'cover', 
        backgroundPosition : "0% 25%" 
    }

    const anchorStyle = {
        textDecoration : 'none',
        color : 'white'
    }
    return (
        <div className="card bg-dark text-white border-dark mt-3 shadow" style={backgroundStyle}>
        <div className="card-img-overlay" >
            <h5 className="card-title">{title}</h5>
            <div className="d-flex flex-column justify-content-between" style={{height : "90%"}}>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Published : {pubDate?.split('T').join(' at ')} +5:30 IST</p>
                    <span className="btn btn-danger">
                        <a  target="_blank" 
                            href={link} 
                            style={anchorStyle}
                            rel="noreferrer"
                        >View Full Article {`>>`}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NewsArticle
