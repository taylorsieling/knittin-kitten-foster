import React from 'react'

const Home = () => {
    return (
        <div>

            <div className="home">
                <div>
                    <h2>Saving the Tiniest Lives</h2>
                    <h1>Knittin' Kitten Foster</h1>
                    <p><a href="https://orphankittenclub.org/donate/">Donate</a></p>
                </div>
            </div>

            <div className="wrapper">

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1597626133612-d9977d3eec18?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Brown Tabby Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <h3>Learn about our mission and how you can help!</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1597626291233-73dfa25093eb?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Calico Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <h3>Adopt: Give one of our kittens a forever home!</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Orange Tabby Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <h3>Staff or Volunteer? Login to the Admin Dashboard.</h3>
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default Home;