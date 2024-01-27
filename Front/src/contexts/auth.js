import axios from 'axios'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  const urlLogin = 'http://localhost:3001/api/users/login'

  const signin = async (credentials) => {
    const response = await axios.post(urlLogin, credentials)
    //console.log(response.data.dataUser.email)
    if (response.data.email !== '') {
      const token = response.data.token
      const email = response.data.dataUser.email
      const name = response.data.dataUser.nome
      localStorage.setItem('user_token', JSON.stringify({ name, email, token }))
      setUser(response.data.dataUser)
      return
    } else {
      return { error: 'Usuário ou senha incorretos' }
    }
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
  }

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}