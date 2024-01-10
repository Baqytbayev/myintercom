import { FunctionComponent, useState } from 'react';
import s from './registrationForm.module.css'
import { useNavigate } from 'react-router-dom';

const RegistrationForm: FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [logged, setLogged] = useState(false);
    const [registration, setRegistration] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleRegistration = () => {
        if (!/^[a-zA-Z0-9]+$/.test(username) || !/^[a-zA-Z0-9]+$/.test(password)) {
            setError('Use english letter.');
            
            return;
        }

        if (password !== confirmPassword) {
            setError('Password not same.');
            return;
        }


        const hashedPassword = hashPassword(password);
        const user = { username, password: hashedPassword };
        sessionStorage.setItem('user', JSON.stringify(user));
        setLogged(true);
        setError('');
        navigate('/users');
    };

    const handleLogin = () => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.username === username && user.password === hashPassword(password)) {
                setLogged(true);
                setError('');
                navigate('/users');
            } else {
                setError('Wrong login');
            }
        } else {
            setError('Login not found');
        }
        
    };

    const toggleRegistration = () => {
        setRegistration(!registration);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const hashPassword = (password: string) => {
        return password;
    };

    return (
        <div className={s['registrationForm']}>
            <h2 className={s['registrationForm-title']}>{registration ? 'Регестрация' : 'Вход в аккаунт'}</h2>
            {error && <p className="errorStyle">{error}</p>}
            <div className={s['registrationForm-input-div']}>
                <input className={s['registrationForm-input']}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Логин'
                />
            </div>
            <div className={s['registrationForm-input-div']}>
                <input  className={s['registrationForm-input']}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Введите пароль'
                />
            </div>
            {registration && (
                <div className={s['registrationForm-input-div']}>
                    <input className={s['registrationForm-input']}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Подтвердите пароль'
                    />
                </div>
            )}
            <button className={s['registrationForm-button']}  onClick={registration ? handleRegistration : handleLogin}>
                {registration ? 'Зарегистрироваться' : 'Войти'}
            </button>
            <div className={s['registrationForm-div']}>
                <span className={s['registrationForm-span']}>
                    {registration ? 'Имеете аккаунт?' : 'Не имеете аккаунт?'}{' '}
                    <button className={s['registrationForm-button']} onClick={toggleRegistration} >
                        {registration ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </span>
            </div>
        </div>
    );
};

export default RegistrationForm;