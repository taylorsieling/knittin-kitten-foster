import React, { Component } from 'react'
import Application from '../components/Application'
import { connect } from 'react-redux'
import { fetchApps } from '../actions/applications'

class Applications extends Component {

    componentDidMount(){
        console.log("applicationDidMount")
        this.props.fetchApps()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return (
                <div>
                    <div className="applications">
                    <div className="home-text">
                        <h1>Foster Applications</h1>
                    </div>
                </div>
                <div><h2>Sifting through the papers... one moment please!</h2></div>
            </div>
            )
        } else {
            console.log(this.props.apps)
            return (
                <>
                    <div className="applications">
                        <div className="home-text">
                            <h1>Foster Applications</h1>
                        </div>
                    </div>

                    <h2>Current Applications</h2>
                    <div className="wrapper">
                        {this.props.apps.map((app => {
                        return (
                        <Application key={app.id} app={app} />
                        )}
                        ))}
                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apps: state.applicationReducer.apps,
        loading: state.applicationReducer.loading
    }
}

export default connect(mapStateToProps, { fetchApps })(Applications)
