
let Greetings =(props)=>{

return (<h1>Hello XYZ</h1>)

}
//root.render(<Greetings/>);




// class secondGreetings extends React.Component{
// render(){
// return <h1>Hello Jane</h1>;

// }
// }
// let root = ReactDOM.createRoot(document.getElementById("Mydiv"));
// root.render(<secondGreetings />);

let root = ReactDOM.createRoot(document.getElementById('Mydiv'));
class SC extends React.Component {
    render(){
      return(
                  <h1> Hello Jane!</h1>     
          )}
  }
  
  root.render(<SC/>);















