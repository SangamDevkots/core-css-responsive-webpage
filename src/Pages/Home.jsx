import React from 'react'

const Home = () => {
    const sectionStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1627518788331-b3b7fdaa382f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '40vh', 
        
    
      };
      
  const textStyle = {
    textAlign: 'center',
    color: '#fff',
    
  };
  return (
<>
<section className='homesection' style={sectionStyle}>
<div className="hometexts" style={textStyle}>
    <h1>Lawyer</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam error laborum id similique? Eaque dolor ab alias sunt repellendus veritatis <br /> placeat repellat, enim nemo ex rerum possimus, in voluptas.</p>

</div>
<button>Services</button>
      </section>
</>
  )
}

export default Home;