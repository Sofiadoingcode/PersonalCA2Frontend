import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";
import "../styles/card.css";

function News(props) {
    const [news, setNews] = useState([])
    useEffect(() => {
        facade.fetchNews()
            .then((res) => res = res)
            .then(data => {
                setNews(data.articles);
            });

    }, []);


    return (
        <>
            <div style={{padding: "2rem"}}>


                {
                    news.map(
                        new1 => <>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={new1.urlToImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{new1.title}</h5>
                                    <p className="card-text">{new1.description}</p>
                                    <a href={new1.url} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}



export default News;