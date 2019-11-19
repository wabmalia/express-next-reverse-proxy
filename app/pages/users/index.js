import fetch from "isomorphic-fetch"

const Index = ({ users }) =>
    <ul>
        {
            users.map(user =>
                <li key={user.name}>{JSON.stringify(user)}</li>
            )
        }
    </ul>

Index.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/api/users', {
        headers: { authorization: ctx.req.headers.authorization }
    })
    const data = await res.json()
    return { ...data }
}
export default Index 