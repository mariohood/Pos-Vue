import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, where, query, limit, orderBy, updateDoc } from 'firebase/firestore'


export const useProductsStore = defineStore('products', () => {

  const db = useFirestore()

  const categories = [
    { id: 1, name: 'Sudaderas' },
    { id: 2, name: 'Tenis' },
    { id: 3, name: 'Lentes' }   
  ]

  const q = query(
    collection(db, 'products'),
    orderBy('name', 'asc')
  )
  const productsCollection = useCollection( q )

  async function createProduct(product) {
    await addDoc(collection( db, 'products'), product)
  }

  async function updateProduct (docRef, product) {
    const { image, url, ...values } = product

    if(image.length) {
      await updateDoc(docRef, {
        ...values,
        image: url.value
      })
    } else {
      await updateDoc(docRef, values)
    }    
  }

  async function deleteProduct (id) {
    console.log(id)
  }

  const categoryOptions = computed(() => {
    const options = [
      {label: 'Seleccione', value: '', attrs: {disabled: true}},
      ...categories.map(category => (
        {label: category.name, value: category.id}
      ))    
    ]
    return options
  })

  const noResults = computed(() => productsCollection.value.length === 0)

  return {
    createProduct,
    updateProduct,
    deleteProduct,
    productsCollection,
    categoryOptions,
    noResults
    
  }

})
