function Home() {
  return(
    <Card 
      bgcolor="light"
      txtcolor="black"
      header={<>
      <h1>Bad Bank Landing Page</h1>
      </>}
      title={<>
      <span>
      <h1>Welcome!</h1></span>
      </>}
      body={(<img src="bank.png" className="img-fluid"
      style={{opacity: '0.6', scale: '0.6'}} 
      alt="Responsive image"/>)}
      />
  );
}