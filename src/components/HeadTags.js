import React from 'react'
import Helmet from 'react-helmet'


class HeadTags extends React.Component {
    state = {}
    
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta name="title" content={this.props.metaTitle} />
                    <meta name="description" content={this.props.metaDescription} />
                    <meta name="keywords" content={this.props.metaKeywords} />
                    <meta name="author" content={this.props.metaAuthor} />
                    <meta name="copyright" content={this.props.metaCopyright} />
                    <meta name="robots" content={this.props.metaIndex} />
                </Helmet>
            </React.Fragment>
        )
    }
}

export default HeadTags