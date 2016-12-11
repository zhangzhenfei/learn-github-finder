import React from 'react';
// 使用 react-router 的 Link 当做超连结，传送 userId 当作 query
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const HomePage = ({userId, onSubmitUserId, onChangeUserId}) => (
    <div>
        <TextField
            hintText="Please Key in your Github User Id."
            onChange={onChangeUserId} />
        {
            /**
             * 注意这里Link里面包含了一个RaisedButton组件，用于点击跳转到对应路由/result，并且通过query参数
             * 把userId传到了定义路由/result的组件ResultPage里面
             */
        }
        <Link
            to={{
            pathname: '/result',
            query: {
                userId
            }
        }}>
            <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
        </Link>
    </div>
);

// propTypes 校验
HomePage.propTypes = {
    userId: React.PropTypes.string,
    onSubmitUserId: React.PropTypes.func,
    onChangeUserId: React.PropTypes.func
};

export default HomePage;
