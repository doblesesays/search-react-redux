import React from 'react'
import Page from "./page";
import { connect } from "react-redux";

function Results(props) {
    const {suggestions} = props;
    console.log(suggestions)
    return (
        <Page></Page>
    )
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    }
}

export default connect(mapStateToProps)(Results);