import React from 'react'
import Helmet from 'react-helmet'


class HeadTags extends React.Component {
    state = {}
    
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta name="description" content={this.props.metaDescription} />
                    <meta name="keywords" content={this.props.metaKeywords} />
                </Helmet>
            </React.Fragment>
        )
    }
}

export default HeadTags