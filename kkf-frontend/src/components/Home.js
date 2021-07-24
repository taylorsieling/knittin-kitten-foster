import React from 'react'
import orangetabby from '../images/Orange-Tabby.png'

const Home = () => {
    return (
        <div>
            <section id="header" className="manhattan">
                <div className="equal-columns">
                    <div className="header-title">
                        <h1>forever foster</h1>
                        <h2>Giving you the tools to help keep your fosters safe, healthy, and most of all, loved.</h2>
                        <p className="line-height"><a className="link-btn action" href="#">Get Started</a></p>
                    </div>
                    <img className="header-img" src={orangetabby} alt="floofy kitten"/>
                </div>
            </section>

            <div className="main">
                <p>
                    Welcome! I'm the Knittin' Kitten Foster, a kitten foster mom and knitting enthusiast! <br/><br/>
                    I believe every cat deserves a happy and healthy life. I aim to provide kittens and cats with a loving environment and around-the-clock care, so that one day they can find their forever home. I take on neonatal kittens, pregnant and nursing mama cats, ill or injured cats, and senior cats - happily providing medical care, play and stimulation, and of course, kisses and cuddles.
                </p>
            </div>

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