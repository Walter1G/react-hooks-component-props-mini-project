import React from "react";
import Article from "./Article";
import blogData from "../data/blog";



function ArticleList({ list }) {


    const articleList = (list).map(article => (
        <li key={article.id}>
            <Article title={article.title} date={article.date} preview={article.preview} />
        </li>
    )

    )



    return (


        <main>


            {articleList}





        </main>
    );

}

export default ArticleList;