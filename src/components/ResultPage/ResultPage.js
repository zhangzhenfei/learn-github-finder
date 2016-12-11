import React from 'react';
import GithubBox from '../GithubBox/GithubBox';

const ResultPage = props => (
    <div>
        <GithubBox data={props.data} userId={props.location.query.userId} />
    </div>
);

ResultPage.propTypes = {
    data: React.PropTypes.any,
    location: React.PropTypes.any
};

export default ResultPage;
