import React, { useEffect, useState } from "react";


function Search () {
    const [query, setQuery] = useState ("Free Wallpaper");
    const [data, setData] = useState([]);
    const [perPage, setPerpage] = useState(80);
    const [loading, setLoading] = useState('');

    const getPhotos = async () => {
        await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
            headers: { 
                Authorization: process.env.REACT_APP_API_KEY
            }
        })
            .then((resp) => {
                return resp.json();
            })
            .then((res) => {
                setData(res.photos);
            });
    };

    useEffect(() => {
        getPhotos();
    }, []);

    //Press Enter to search

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };

    return (
        <div>
            <input
                className="inputSearch"
                onKeyDown={onKeyDownHandler}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    />
            <div className="grid">
                {data?.map((item, index) => {
                    return (
                        <div className="grid-item" key={index}>
                            <img src={item.src.original} alt={item.id} />
                        </div>
                    );
                })}
            </div>
            <div>
                <button className="btn btn-success">
                    Load More
                </button>
            </div>
                    </div>
                    );
                }

                    export default Search;