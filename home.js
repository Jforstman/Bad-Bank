function Home() {
  return(
    <Card 
      bgcolor="light"
      txtcolor="black"
      header={<>
      <span className="placeholder col-12 bg-dark"></span>
      <h1>Bad Bank Landing Page</h1>
      <span className="placeholder col-12 bg-dark"></span>
      </>}
      title={<>
      <span>
      <h1>Welcome!</h1></span>
      </>}
      body={(<img src="bank.png" className="img-fluid"
      style={{opacity: '0.6', scale: '0.8'}} 
      alt="Responsive image"/>)}
      />
  );
}