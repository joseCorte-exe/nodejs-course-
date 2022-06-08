/*
  0 - obter um usuario
  1 - obter numero de usuario by id
  2 - obter o endereço do usuario pelo id
*/

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      birth: new Date()
    })
  }, 1000)
}

function getPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '1199002',
      ddd: 11
    })
  }, 2000)
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}

getUser((error, user) => {
  if (error) {
    console.error('deu ruim em usuario', error)
    return;
  }
  getPhone(user.id, (error1, phone) => {
    if (error1) {
      console.error('deu ruim em telefone', phone)
      return;
    }
    getAddress(user.id, (error2, address) => {
      if (error2) {
        console.error('deu ruimi em endereço', error)
        return;
      }

      console.log(`
        name: ${user.name}
        address: ${address.rua}, ${address.numero}
        phone: ${phone.ddd}${phone.phone}
      `)
    })
  })
})

// const user = getUser(handleUser)
// const phone = getPhone(user.id)

// console.log('usuario', user)
// console.log('telefone', phone)
