import './App.css';
import { LoginForm } from './LoginForm/LoginForm';
import { MyComponent } from './MyComponent/MyComponent';
export const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log('userData', userData);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onSubmit={handleLogin} />
      <MyComponent />
    </div>
  );
};
