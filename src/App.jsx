function App() { 
  const name = 'StarGazers'
  return (
    <hgroup>
      <img src="images/group.svg" alt="StarGrazers Group" />
        <h1>Meet the <i style={{color:"Red"}}>{name}</i></h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={()=> alert('Hello')}></button>
    </hgroup>
  )
}
export default App
