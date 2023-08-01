import Title from '../components/Title/Title';
import Container from '../components/layout/Container/Container';
import { useCallback, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = useCallback(async () => {
    event.preventDefault();
    try {
      const {
        data: { access_token },
      } = await axios.put('/api/auth/login', {
        id: username,
        password,
      });
      if (access_token) {
        localStorage.setItem('access_token', access_token);
        alert('로그인 성공');
      }
    } catch (e) {
      alert('로그인 실패');
    }
  }, [username, password]);

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={'아이디'}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder={'암호'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value={'로그인'} />
      </form>
    </Container>
  );
};

export default Login;
