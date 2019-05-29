import HomePage from '../views/Home/HomePage';
import RegisterPage from '../views/User/RegisterPage';
import LoginPage from '../views/User/LoginPage';
import TourForm from '../components/TourForm/TourForm';


const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/create-tour',
    component: TourForm,
  },
];

export default routes;
