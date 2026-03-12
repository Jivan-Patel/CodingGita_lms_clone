import Nav from "../components/Nav2";

function Student() {
  const data = JSON.parse(localStorage.getItem("user"));

  if (!data) {
    return (
      <div>
        No user Found
      </div>
    )
  }

  
  return (
    <>
      <Nav />
      
    </>
  )
}

export default Student
