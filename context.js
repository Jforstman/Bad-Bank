const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? 'bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? 'text-' + props.txtcolor : 'text-white';
    return 'card mb-3' + bg + txt;
  }

  return(
    <div className={classes()} style={{maxwidth: '18rem'}}>
      <div className="card-header" style={{background: 'crimson', color: 'white', size: '30px'}}>{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="createStatus">{props.status}</div>)}
      </div>

    </div>
  )
}

/*function handle(data) {
  const users =  [{
    name: 'Jamie',
    email: 'justlovinglife73@gmail.com',
    password: 'secret',
    balance: 100
  }]
  return users;
}*/