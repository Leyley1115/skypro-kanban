import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';
export async function fetchCards({ token }) {
   try {
      const data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return data.data
      // когда работаем с axios, не забываем, что результат лежит в ключе datа
   } catch (error) {
      throw new Error(error.message)
   }
}

export async function editCard({ token, id, card }) {
    try {
        const data = await axios.put(`${API_URL}/${id}`, card, {
            headers: {
                Authorization: 'Bearer ' + token,
            'Content-Type': 'text/html',
        },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function postCard({ token, card }) {
   try {
      const data = await axios.post(API_URL, card, {
         headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'text/html',
         },
      })
      return data.data.tasks
   } catch (error) {
      throw new Error(error.message)
   }
}