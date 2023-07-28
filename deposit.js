// function Deposit() {
//   const ctx = React.useContext(UserContext);
//   //const bal = React.useContext(UserBalance);

//   const handleDeposit = (index, amount) => {
//     const updatedUsers = [...ctx.users]; // Create a copy of the users array
//     updatedUsers[index].balance += amount; // Update the balance for the specified user
//     ctx.setUsers(updatedUsers);
//   };

//   return (
//     <>
//       <span className="placeholder col-12 bg-dark"></span>
//       <h1>Deposit</h1>
//       <span className="placeholder col-12 bg-dark"></span>
//       {ctx.users.map((user, index) => (
//         <div key={index} className="card">
//           <div className="card-body">
//             <h6>Name: {user.name}</h6>
//             <p>Email: {user.email}</p>
//             <p>Password: {user.password}</p>
//             <p>Balance: {user.balance}</p>
//             <input type="input" className="form-control" Placeholder="Deposit Amount"></input>
//             <button onClick={() => handleDeposit(index)}>Submit</button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
function Deposit() {
  const ctx = React.useContext(UserContext);

  // State to store the deposit amount entered by the user
  const [depositAmount, setDepositAmount] = React.useState('');

  const handleDeposit = (index) => {
    // Convert the depositAmount string to a number
    const amount = parseFloat(depositAmount);

    if (!isNaN(amount) && amount > 0) {
      const updatedUsers = [...ctx.users]; // Create a copy of the users array
      updatedUsers[index].balance += amount; // Update the balance for the specified user
      //ctx.setUsers(updatedUsers);
      // Reset the depositAmount state after successful deposit
      setDepositAmount('');
    } else {
      alert('Please enter a valid positive number for the deposit amount.');
    }
  };

  return (
    <>
      <h1 className="bg-danger text-white">Deposit</h1>
      {ctx.users.map((user, index) => (
        <div key={index} className="card text-white">
          <div className="card-body bg-danger">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Balance: {user.balance}</p>
            <input
              type="number" // Use type "number" for numeric input
              className="form-control"
              placeholder="Deposit Amount"
              value={depositAmount} // Set the input value to the depositAmount state
              onChange={(e) => setDepositAmount(e.target.value)} // Update depositAmount state on input change
            />
            <button onClick={() => handleDeposit(index)}>Submit</button>
          </div>
        </div>
      ))}
      </>
  );
}

//const [deposit, setDeposit] = React.useState(0);
  //const [totalState, setTotalState] = React.useState(100);
  //const [validTransaction, setValidTransaction] = React.useState(false);
/*onChange={(e) => handleChange(e)}
return(
    <Card 
      bgcolor="light"
      txtcolor="black"
      header={
        <div>
          <span className="placeholder col-12 bg-dark"></span>
          <h1>Deposit</h1>
          <span className="placeholder col-12 bg-dark"></span>
        </div>}
        /*let status = totalState;
  let newTotal = status + deposit;
  const handleSubmit = (event) => {
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };
  const isValid = (event) => {
      setValidTransaction(false) ? (Number(event.target.value) < 0) : setValidTransaction(true);
    };

  const handleChange = (event) => {
    if (validTransaction(true)) {
    setDeposit(Number(event.target.value));
    }};*/
      
      /*body={ctx.users.map((user, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Balance: {user.balance}</p>
            <button onClick={() => handleDeposit(index)}>Deposit $50</button>
          </div>
        </div>
      ))}
      />
  );*/