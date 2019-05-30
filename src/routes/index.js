import HomePage from '../views/Home/HomePage';
import RegisterPage from '../views/User/RegisterPage';
import LoginPage from '../views/User/LoginPage';
import TourForm from '../components/TourForm/TourForm';
import EditToursPage from '../views/Tours/EditToursPage';


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
  {
    path: '/edit-tour/:tourId',
    component: EditToursPage,
  },
];

export default routes;
