import firebase from '../../Config/firebase';

export async function registroUser(data){
   const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
   console.log('USUARIO', responseUser)
   if (responseUser.user.uid){
    const document = await firebase.firestore().collection("usuarios").add({
        name: data.nombre,
        lastName: data.apellido,
        email:data.email,
        userid: responseUser.user.uid,
      })
      
    return document
   }
   return responseUser
}

export  async function login (datos){
    const responseUser = await firebase
    .auth()
    .signInWithEmailAndPassword(datos.email, datos.password);
    console.log('USUARIO', responseUser)
    if (responseUser.user.uid) {
        const document = await firebase
          .firestore()
          .collection("usuarios")
          .where("userid", "==", responseUser.user.uid)
          .get();
         
          return document.docs[0].data()
        }
        console.log('DOCUMNETO', document)
      return{}
}