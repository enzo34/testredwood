import { useAuth } from "@redwoodjs/auth"
import { useMutation } from "@redwoodjs/web"
import { QUERY as CommentQuery } from "../CommentsCell"

const DELETE = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      postId
    }
  }`

const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({comment}) => {
  const { hasRole } = useAuth()
  const [deleteComment] = useMutation(DELETE, {
    refetchQueries: [
      {query: CommentQuery, variables: {postId: comment.postId}}
    ]
  })
  const moderate = () => {
    if(confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
      deleteComment({ variables: { id: comment.id } })
    }
  }
  return (
    <div className="bg-gray-200 p-8 rounded-lg relative">

          <header className="flex justify-between">
            <h2 className="font-semibold text-gray-700">{comment.name}</h2>
            <time className="text-xs text-gray-500" dateTime={comment.createdAt}>{formattedDate(comment.createdAt)}</time>
          </header>
    
         <p className="text-sm mt-2">{comment.body}</p>
         {hasRole('moderator') && (
           <button type='button' onClick={moderate} className='absolute bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1'>
              Supprimer
           </button>
         )}
    </div>
   
  )
}

export default Comment
