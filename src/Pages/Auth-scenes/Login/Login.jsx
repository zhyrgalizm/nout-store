import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../Components/Spinner/Spinner';
import { singIn } from '../../../Redux/reducers/store-reducer';
import styles from './Login.module.css'

const Login = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    const [userData, setUserData] = useState({
        password: '',
        username: '',
    })
    const getUserData = (type, value) => {
        setUserData({ ...userData, [type]: value })
    }
    const logIn = (e) => {
        e.preventDefault()
        dispatch(singIn(userData))
    }
    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className={styles.logIn}>
            <div className={styles.container}>
                <form onSubmit={logIn}>
                    <div className={styles.inputs}>

                        <div>
                            <p>Ваш Логин</p>
                            <input value={userData.username} onChange={(e) => getUserData('username', e.target.value)} className={`${styles.enter} ${styles.enter1}`} type="text"
                                placeholder='Введите ваш адрес эл. почты' />
                        </div>
                        <div>
                            <p>Ваш пароль</p>
                            <input onChange={(e) => getUserData('password', e.target.value)} value={userData.password} className={styles.enter} type="password" placeholder='Введите ваш пароль' />
                        </div>

                    </div>
                    <div className={styles.btn__wrap}>
                        <button className={styles.add__btn}>Войти</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;