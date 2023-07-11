export default function Login(){      
    return(
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">SPPg - Login</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Usuário" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Senha" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </div>
                </form>
            </div>
    );
}





