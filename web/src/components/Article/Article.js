import { Link, routes } from '@redwoodjs/router'
import CommentForm from '../CommentForm/CommentForm'
import CommentsCell from '../CommentsCell/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    
    <article>
      <p>Article n° {article.id}</p>
      <header>
        
        <h2 className="text-xl font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      {!summary && (
          <div>
            <CommentForm postId={article.id}/>
        
          <div className='mt-12'>
            <CommentsCell postId={article.id}/>
        </div>  
        </div>
        ) }
    </article>
  )
}

export default Article