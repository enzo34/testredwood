import Comment from './Comment'

export const generated = () => {
  return <Comment 
      comment={{
        name: 'John Doe',
        body: 'Premier commentaire',
        createdAt: '2020-01-01T00:00:00.000Z'
      }}
    />
}

export default { title: 'Components/Comment' }
