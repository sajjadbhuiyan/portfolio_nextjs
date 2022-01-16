import User from "../components/user"

function userList({users}){
    return (
        <>
            <h1>User List</h1>
            {users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user}></User>
                        </div>
                    )
            })}
        </>
    )
}

export default userList

export async function getStaticProps() {
    const fatchingData = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await fatchingData.json()

    return {
        props: {
          users: data
        }
      }
}

