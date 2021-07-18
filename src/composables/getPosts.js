import { ref } from "vue"

// This is same as below
// const getPosts = () => {}
function getPosts() {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts')
      if (!data.ok) throw Error('No data available')

      posts.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts