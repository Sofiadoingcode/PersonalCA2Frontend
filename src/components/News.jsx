import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function News(props) {
    const [news, setNews] = useState([])
    useEffect(  () => {
        facade.fetchNews()
            .then((res) => res.json())
            .then(data => {
                setNews(data);
            });
    }, []);


    return (
        <>
            <div style={{padding: "2rem"}}>
                <table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fact</th>
                        <th>Picture</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {news.map(
                        (fact) => {
                            return (
                                <>
                                    <tr>
                                        <td>{fact.sources.id}</td>
                                        <td>{fact.author}</td>

                                    </tr>
                                </>
                            )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default News;