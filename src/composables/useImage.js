import { uid } from 'uid'
import { useFirebaseStorage } from 'vuefire'
import { ref as storageRef, uploadBytesResumable } from 'firebase/storage'


export default function useImage() {

const storage = useFirebaseStorage()

  const onFileChange = e => {
    const file = e.target.files[0]
    const filename = uid() + '.jpg'
    const sRef = storageRef(storage, '/products/' + filename)


    // Sube el archivo
    const uploadTask = uploadBytesResumable(sRef, file)

    uploadTask.on('state_changed',
      () => {},
      (error) => console.log(error),
      () => {
        console.log(uploadTask.snapshot.ref)
      }
    )
  }

  return {
    onFileChange
  }
}