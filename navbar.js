function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs">
          <li className="nav-item active">
            <a className="nav-link text-white" data-toggle="tooltip" data-placement="bottom" title="Home / Landing Page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" data-toggle="tooltip" data-placement="bottom" title="Create a new account here!" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" data-toggle="tooltip" data-placement="bottom" title="Make a deposit to your account" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" data-toggle="tooltip" data-placement="bottom" title="Make a withdrawal from your account" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" data-toggle="tooltip" data-placement="bottom" title="All user account data" href="#/alldata/">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

//<li className="nav-item">
//<a className="nav-link" href="#/balance/">Balance</a>
//</li>