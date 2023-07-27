function AllData() {
    const ctx = React.useContext(UserContext);
    // console.log(ctx.users[0].name);
    console.log(ctx);
    return (
      <>
        <h5>All Data in Store</h5>
        {ctx.users.map((user, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h6>Name: {user.name}</h6>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
              <p>Balance: {user.balance}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
   
  