import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function News(props) {
    const [news, setNews] = useState([])
    useEffect(  () => {
        facade.fetchNews()
            .then((res) => res = res)
            .then(data => {
                setNews(data.articles);
            });

    }, [] );


    return (
        <>
            <div style={{padding: "2rem"}}>


                <div>
                    <div>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Pic</th>

                        </tr>
                        </thead>
                        {
                            news.map(
                            new1 =>
                                <>
                                    <tr>
                                        <td>{new1.title}</td>
                                        <td>{new1.author}</td>
                                        <td><img src={new1.urlToImage}/></td>

                                    </tr>
                                </>

                        )}
                    </div>

                </div>

            </div>
        </>
    );
}


export default News;