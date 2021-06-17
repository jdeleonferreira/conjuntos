

const UsuarioDetalle = ({ user }) => {
    return (<div>
        <p>Nombre: {user.firstname}</p>
        <p>Apellido: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Created By: {user.createby}</p>
        <p>Crated Date: {user.createdate}</p>
        {console.log(user)}
    </div>);
}

export default UsuarioDetalle;