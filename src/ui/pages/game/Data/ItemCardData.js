import { v4 as uuid } from 'uuid';
export default [
  {
    id: uuid(),
    cardIcon: process.env.PUBLIC_URL + '/static/images/exercise/group1.svg',
    cardTitle: '健康王'
  },
  {
    id: uuid(),
    cardIcon: process.env.PUBLIC_URL + '/static/images/exercise/group5.svg',
    cardTitle: '宝箱１'
  },
  {
    id: uuid(),
    cardIcon: process.env.PUBLIC_URL + '/static/images/exercise/group3.svg',
    cardTitle: 'QR王'
  },
  {
    id: uuid(),
    cardIcon: process.env.PUBLIC_URL + '/static/images/exercise/group4.svg',
    cardTitle: '探検王'
  },
  {
    id: uuid(),
    cardIcon: process.env.PUBLIC_URL + '/static/images/exercise/group2.svg',
    cardTitle: 'Faltu'
  },
];
