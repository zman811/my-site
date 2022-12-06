let Chat = ({message, user}) => {
  console.log(message)
  return (
    <div>{user}: {message} </div>
  )
}

export default Chat