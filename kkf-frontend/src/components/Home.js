import React from 'react'
import orangetabby from '../images/Orange-Tabby.png'

const Home = () => {
    return (
        <div>
            <section id="header" className="tana">
                <div className="equal-columns">
                    <div className="header-title">
                        <h1>forever foster</h1>
                        <h2>Giving you the tools to keep your foster kittens safe, healthy, and most of all, <strong>loved.</strong></h2>
                        <p className="line-height"><a className="link-btn action" href="#">Get Started</a></p>
                    </div>
                    <img className="header-img" src={orangetabby} alt="floofy kitten"/>
                </div>
            </section>

            <section>
                <div className="main equal-columns">
                    <h3><i>“A kitten is, in the animal world, what a rosebud is in the garden.”<br/><br/>- Robert Southey</i></h3>
                    <p></p>
                </div>
            </section>

            <div className="wrapper">

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1597626133612-d9977d3eec18?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Brown Tabby Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <hr/>
                        <h3>Rescue & Fostering</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1597626291233-73dfa25093eb?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Calico Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <hr/>
                        <h3>Education & Outreach</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img className="cardimg" src="https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Orange Tabby Kitten" width="100"/>
                    </div>
                    <div className="card-title">
                        <hr/>
                        <h3>Adoption & Forever Homes</h3>
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default Home;