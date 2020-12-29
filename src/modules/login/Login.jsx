import React from 'react';
import './style.less';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
        }
    }
    componentDidMount() {
        console.log('--------componentDidMount------');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('-------componentDidUpdate------');
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo)
    }

    componentWillUnmount() {
        console.log('--------componentWillUnmount-------');
    }

    render() {
        return (
            <div className = {'root__avtoriz-container'}>
                <div className = {'avtoriz-container__heder-div'}>
                    <h1 className = {'heder-div__heder-text'}
                        children={'Salam Aleykum'}
                    ></h1>
                </div>
                <div className = {'window__login-body'}>
                    <div className = {'avtoriz-container__login-input-div'}>
                        <input name={'login'}
                               placeholder= {'Введите логин...'}
                               className = {'login-input-div__login-input'}
                               /> 
                        
                    </div>
                </div>
                <div className = {'avtoriz-container__login-button-div'}>
                    <button id = {'login-button'}
                    className = {'login-button-div__login-button'}
                    ></button>
                </div>
            </div>
        );
    }
}
export default Login;