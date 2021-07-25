import React from 'react'
import orangetabby from '../images/Orange-Tabby.png'
import browntabby from '../images/Brown-Tabby.png'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
    const { loginWithRedirect,logout,user,isLoading } = useAuth0();
    return (
        <section id="home">
            <div className="header tana">
                <div className="equal-columns">
                    <div className="header-title">
                        <h1>forever foster</h1>
                        <h2>Giving you the tools to keep your foster kittens safe, healthy, and most of all, <strong>loved.</strong></h2>
                        <p className="line-height"><button className="link-btn action" onClick={() => loginWithRedirect()}>Get Started</button></p>
                    </div>
                    <img className="header-img" src={orangetabby} alt="floofy kitten"/>
                </div>
            </div>

            <div className="sidecar header-body">
                <div className="main equal-columns">
                    <h2><i>“A kitten is, in the animal world, what a rosebud is in the garden.”<br/><br/>- Robert Southey</i></h2>
                    <p></p>
                </div>

                <div className="container">
                    <p>We want to see your foster kittens bloom! To do that, we created Forever Foster - an application to help you manage kitten intake information, record growth and medical data, process adoption applications, and much more! Spend less time maintaining records and paperwork, and more time saving tiny lives. Create an account to get started!</p>
                </div>

                <div className="equal-columns">
                    <div className="info-card tana">
                        <i class="fa fa-folder-open fa-2x" aria-hidden="true"></i>
                        <p>Record intake information for your kittens to make them individual care profiles. Associate your kittens with litters for better organization.</p>
                    </div>
                    <div className="info-card swan">
                        <i class="fa fa-balance-scale fa-2x" aria-hidden="true"></i>
                        <p>Keep those kitten plump - and document it while you do! Easily track your kittens' weights and view stats on how they're growing.</p>
                    </div>
                    <div className="info-card manhattan">
                        <i class="fa fa-medkit fa-2x" aria-hidden="true"></i>
                        <p>Document your kittens' medical history with easy-to-fill forms, including vet visits, vaccines, parasite treatment, surgeries and more.</p>
                    </div>
                </div>
            </div>

            <div className="spruce">
                <div className="equal-columns">
                    <div></div>

                    <ul>
                        <li className="amaranth"><strong>Forever Foster</strong></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Take a Tour</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <ul>
                        <li className="amaranth"><strong>Getting Started</strong></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Adopt a Kitten</a></li>
                    </ul>
                    <ul>
                        <li className="amaranth"><strong>Contact</strong></li>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>
            </div>
            
           


{/* 
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
    
            </div> */}
        </section>
    )
}

export default Home;