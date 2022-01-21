import axios from 'axios';
import {ResponseType} from "./authReducer";
import {myResponseType} from "./authReducer";
///
const settings = {
  withCredentials: true,
  // headers: {
  //   'API-KEY': '40979d82-3c32-4398-abbe-81041d6b3ea6'
  // }
}
const instance = axios.create({
  baseURL: 'https://xenera.aestar.com.ua/api/',
  ...settings
})

export const authAPI = {
  registration(data) {
    // return instance.post<ResponseType<{userId:number}>>('auth/login',data)
    // return instance.post('user/register',data)
    //username=KEY_username&password=KEY_password&fullname=KEY_fullname
    // return instance.post(`user/register?username=${data.email}&password=${data.password}&fullname=fullname`)
    return instance.post(`user/register`,{'username':data.email,'password':data.password})
  },
  login(data) {
    // return instance.post<ResponseType<{userId:number}>>('auth/login',data)
    return instance.post('user/login',data)
  },
  resetPassword() {
    // return instance.delete<ResponseType>('auth/login')
    return instance.delete('user/resetPassword')
  },
  update() {
    // return instance.delete<ResponseType>('auth/login')
    return instance.post('user/update')
  },
  me(){
    // return instance.get<ResponseType<myResponseType>>('/auth/me')
    return instance.get('user/me')
  }
}
//
export function login(parameter) {
  return axios.post(
    '/user/login',
    {
      name: parameter.name,
      password: parameter.password
    },
    { baseURL: process.env.REACT_APP_API_BASE_URL, timeout: 8000 } // baseURL: process.env.REACT_APP_API_BASE_URL,
  );
}
export function register(parameter) {
  return axios.post(
    '/user/register',
    {
      name: parameter.name,
      password: parameter.password
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000
    }
  );

}

export function changePassword(parameter) {
  return axios.post(
    '/user/password',
    {
      userId:parameter.userId,
      name: parameter.name,
      password: parameter.password
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}

export function getChallenge(parameter) {
  return axios.get(`/user/${parameter.userId}/challenge`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 80000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getQRUserEquity(parameter) {
  return axios.post(
    '/user/point',
    {
      userId: parameter.userId,
      recordId: parameter.recordId
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}
export function getUserEquity(parameter) {
  return axios.get(`/user/${parameter.userId}/equity`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getUserAnimal(parameter) {
  return axios.get(`/user/${parameter.userId}/animal`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function saveAnimal(parameter) {
  return axios.post(
    '/user/animal',
    {
      userId: parameter.userId,
      animalId: parameter.animalId,
      coinsCount: parameter.coinsCount,
      isSale: parameter.isSale,
      animalName: ''
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}
export function saveFood(parameter) {
  return axios.post(
    '/user/food',
    {
      userId: parameter.userId,
      animalId: parameter.animalId,
      foodId: parameter.foodId,
      foodCount: parameter.foodCount
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}
export function feedAnimal(parameter) {
  return axios.post(
    '/animal/feed',
    {
      userId: parameter.userId,
      animalId: parameter.animalId,
      foodId: parameter.foodId,
      foodCount: 1
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}

export function getUserPoint(parameter) {
  return axios.get(`/user/${parameter.userId}/point`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
// Gets the item currently equipped by the user
export function getAvatarItem(parameter) {
  return axios.get(`/user/${parameter.userId}/equipped/item`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}

//Gets the items for all of the user's equipment
export function getAllAvatarItem(parameter) {
  return axios.get(`/user/${parameter.userId}/item`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}

//Save the item of the user's equipment
export function saveAvatarItem(parameter) {
  return axios.post(
    '/user/item',
    {
      userId: parameter.userId,
      itemId: parameter.itemId,
      coinsCount: parameter.coinsCount,
      isSale: parameter.isSale
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}

//Change the item that the user is equipped with
export function updateAvatarItem(parameter) {
  return axios.post(
    '/user/item/status',
    {
      userId: parameter.userId,
      itemId: parameter.itemId,
      status: parameter.status
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}
export function getUserARChest(parameter) {
  return axios.get(
    `/user/${parameter.userId}/${parameter.chestNo}/chest/animal`,
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}
export function getGoldByOnline(parameter) {
  
  return axios.post('/user/animal/timer', 
  {
    userId: parameter.userId,
  },
  {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function pickUpGold(parameter) {
  
  return axios.post('/user/animal/coin/collection ', 
  {
    userId: parameter.userId,
    coin:parameter.gold,
    animalId:parameter.animalId,
  },
  {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getUnReadNotification(parameter) {
  return axios.get(`/user/${parameter.userId}/unread/notification/count`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getNotifications(parameter) {
  return axios.get(`/user/${parameter.userId}/notification`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    },
    responseType: 'json',
  });
}
export function getAllFriend(parameter) {
  return axios.get(`/user/${parameter.userId}/all/friend`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getFriendCount(parameter) {
  return axios.get(`/user/${parameter.userId}/friend/count`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function getSearchFriend(parameter) {
  return axios.get(`/user/${parameter.userId}/${parameter.name}/search`, {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 8000,
    headers: {
      Authorization: 'Bearer ' + parameter.token
    }
  });
}
export function addFriend(parameter) {
  return axios.post(
    '/user/friend/ship',
    {
      userId: parameter.userId,
      friendUserId: parameter.friendUserId
    },
    {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 8000,
      headers: {
        Authorization: 'Bearer ' + parameter.token
      }
    }
  );
}

