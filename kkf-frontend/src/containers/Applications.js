import React, { Component } from 'react'
import Application from '../components/Application'
import { connect } from 'react-redux'
import { fetchApps } from '../actions/applications'

class Applications extends Component {

    componentDidMount(){
        debugger
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
            return (
                <>
                    <div className="applications">
                        <div className="home-text">
                            <h1>Foster Applications</h1>
                        </div>
                    </div>

                    <h2>Current Applications</h2>
                    <div className="wrapper">
                        {/* Filter/Search Component */}
                        {this.props.applications.map((app => {
                        return (
                        <Application key={app.id} application={app} />
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
        applications: state.applicationReducer.applications,
        loading: state.applicationReducer.loading
    }
}

export default connect(mapStateToProps, { fetchApps })(Applications)
