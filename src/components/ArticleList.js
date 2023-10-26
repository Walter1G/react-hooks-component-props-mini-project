import React from "react";
import Article from "./Article";
import blogData from "../data/blog";



function ArticleList({ posts }) {




    return (


        <main>
            {posts.map(article =>

                (<Article key={article.id} title={article.title} date={article.date} preview={article.preview} />)

            )}



        </main>
    );

}

export default ArticleList;