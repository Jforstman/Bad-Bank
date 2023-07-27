// function Withdraw() {
//   const ctx = React.useContext(UserContext);

//   const handleWithdraw = (index, amount) => {
//     const updatedUsers = [...ctx.users]; // Create a copy of the users array
//     updatedUsers[index].balance -= amount; // Update the balance for the specified user

//     // Update the users array in the context
//     ctx.setUsers(updatedUsers);
//   };

//   return (
//     <>
//       <span className="placeholder col-12 bg-dark"></span>
//       <h1>Withdrawal</h1>
//       <span className="placeholder col-12 bg-dark"></span>
//       {ctx.users.map((user, index) => (
//         <div key={index} className="card">
//           <div className="card-body">
//             <h6>Name: {user.name}</h6>
//             <p>Email: {user.email}</p>
//             <p>Password: {user.password}</p>
//             <p>Balance: {user.balance}</p>
//             <input type="input" className="form-control" Placeholder="Deposit Amount"></input>
//             <button onClick={() => handleWithdraw(index)}>Submit</button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

function Withdraw() {
  const ctx = React.useContext(UserContext);

  // State to store the withdrawal amount entered by the user
  const [withdrawAmount, setWithdrawAmount] = React.useState('');

  const handleWithdraw = (index) => {
    // Convert the withdrawAmount string to a number
    const amount = parseFloat(withdrawAmount);

    if (!isNaN(amount) && amount > 0) {
      const updatedUsers = [...ctx.users]; // Create a copy of the users array

      // Check if the withdrawal amount is less than or equal to the user's balance
      if (amount <= updatedUsers[index].balance) {
        updatedUsers[index].balance -= amount; // Update the balance for the specified user
        ctx.setUsers(updatedUsers);
        // Reset the withdrawAmount state after a successful withdrawal
        setWithdrawAmount('');
      } else {
        alert('Insufficient balance. Cannot withdraw more than the current balance.');
      }
    } else {
      alert('Please enter a valid positive number for the withdrawal amount.');
    }
  };

  return (
    <>
      <span className="placeholder col-12 bg-dark"></span>
      <h1>Withdrawal</h1>
      <span className="placeholder col-12 bg-dark"></span>
      {ctx.users.map((user, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Balance: {user.balance}</p>
            <input
              type="number" // Use type "number" for numeric input
              className="form-control"
              placeholder="Withdrawal Amount"
              value={withdrawAmount} // Set the input value to the withdrawAmount state
              onChange={(e) => setWithdrawAmount(e.target.value)} // Update withdrawAmount state on input change
            />
            <button onClick={() => handleWithdraw(index)}>Submit</button>
          </div>
        </div>
      ))}
    </>
  );
}


/*alert("Insufficient funds for that transaction!");
      setValidTransaction(false);
    } else {
      setValidTransaction(true);


  const handleWithdraw = (index, amount) => {
    const updatedUsers = [...ctx.users]; // Create a copy of the users array
    updatedUsers[index].balance -= amount;// Update the balance for the specified user
  };*/
  /*
  const [withdraw, setWithdraw] = React.useState(0);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);

  const handleSubmit = (event) => {
    if (!validate(amount, "withdraw amount")) return;
    user.balance = parseInt(user.balance) - parseInt(amount);
    setStatus(newTotal);
    event.preventDefault();
  };


  const handleChange = (event) => {
    setStatus('Only numbers!');
    setTimeout(() => setStatus(''), 5000);
    clearForm();
    alert('Enter a numeric value.');
    setWithdraw(Number(event.target.value));
    return false;
  };
  function validate(field, label){
    console.log(field);

    if(!field){
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 5000);
      clearForm();
      return false;
    }
    //Verify numeric value
    else if (isNaN(+field)) {
      setStatus ('Only numbers!');
      setTimeout (() => setStatus(''), 5000);
      clearForm();
      alert('Enter a numeric value.')
      return false;
    }
    //Verify value is positive
    else if ( field < 0 ) {
      setStatus('Enter a positive number');
      setTimeout(() => setStatus(''), 5000);
      clearForm();
      return false;
    }
    //Verify sufficant funds
    else if (field > parseInt(ctx.users[i].balance)) {
      setStatus('Insufficant Funds!');
      setTimeout(() => setStatus (''), 5000);
      clearForm();
      return false;
    }
    //Sucess message
    setStatus ('Your withdrawal is sucessful!');
    setTimeout (() => setStatus(''), 5000);
    clearForm();
    return true;
  }

  return(
    <Card 
      bgcolor="light"
      txtcolor="black"
      header={<>
      <span className="placeholder col-12 bg-dark"></span>
      <h1>Withdrawal</h1>
      <span className="placeholder col-12 bg-dark"></span>
      </>}
      body={
        <div>
          <h6>{`Welcome, ${user.name}!  Current Balance: $ ${user.balance}`}</h6>
          <p>Choose the amount of your withdrawal</p>
          Withdrawal Amount<form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)}>
      <>
      <input id="number-input" type="number" width="200"></input>
      <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </>
      </form>
      </div>
      }
      />
    );*/