function AllData() {
    const ctx = React.useContext(UserContext);
    // console.log(ctx.users[0].name);
    console.log(ctx);
    return (
      <>
        <h1 className="bg-danger text-white">All User Data</h1>
        {ctx.users.map((user, index) => (
          <div key={index} className="card text-white">
          <div className="card-body bg-danger">
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
   
  