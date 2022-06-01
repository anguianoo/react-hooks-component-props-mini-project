import React from "react"
import Article from "./Article.js"

export default function ArticleList({ articles }) {
  const theArticles = articles.map((article, i) => (
    <Article
      key={i}
      title={article.title}
      date={article.date}
      preview={article.preview}
    />
  ))
  return (
    <main>
      <article>{theArticles}</article>
    </main>
  )
}
