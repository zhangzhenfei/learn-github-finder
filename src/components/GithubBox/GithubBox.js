import React from 'react';
import {Link} from 'react-router';
// 引入 material-ui 的卡片式组件
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
// 引入 material-ui 的 RaisedButton
import RaisedButton from 'material-ui/RaisedButton';
// 引入 ActionHome icon
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = props => (
    <div>
        <Card>
            <CardHeader
                title={props.data.get('name')}
                subtitle={props.userId}
                avatar={props.data.get('avatar_url')} />
            <CardText>
                Followers : {props.data.get('followers')}
            </CardText>
            <CardText>
                Following : {props.data.get('following')}
            </CardText>
            <CardActions>
                <Link to="/">
                    <RaisedButton label="Back" icon={< ActionHome />} />
                </Link>
            </CardActions>
        </Card>
    </div>
);

GithubBox.propTypes = {
    data: React.PropTypes.any,
    userId: React.PropTypes.any
};

export default GithubBox;
