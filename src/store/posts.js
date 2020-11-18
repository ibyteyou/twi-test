import DefaultData, { DefaultComment, DefaultUser } from './posts-default'
import { random } from 'lodash-es'
import clone from '../vendor/clone'
import { read, save } from '../vendor/storage'

const LOCAL_POSTS = 'localPosts'
let StateData = read(LOCAL_POSTS)
if (StateData) {
  StateData = JSON.parse(StateData)
} else {
  StateData = clone(DefaultData)
}

export default {
  state: {
    data: StateData
  },
  getters: {
    posts: (state) => state.data.sort((a, b) => b.date - a.date)
  },
  mutations: {
    add (state, post) {
      state.data.push(post)
    },
    clear (state) {
      state.data.forEach(item => {
        if (!item._commentTimer) return

        clearTimeout(item._commentTimer)
      })

      state.data = []
      save(LOCAL_POSTS, JSON.stringify(state.data))
    },
    default (state) {
      state.data = clone(DefaultData)
      save(LOCAL_POSTS, JSON.stringify(state.data))
    }
  },
  actions: {
    addPost ({ commit, state }, postContent) {
      const Post = {
        date: (new Date).getTime(),
        content: postContent,
        comments: [],
        user: DefaultUser
      }
      commit('add', Post)
      save(LOCAL_POSTS, JSON.stringify(state.data))

      Post._commentTimer = setTimeout(() => {
        Post.comments.push({
          text: DefaultComment.slice(0, random(1, DefaultComment.length)),
          user: DefaultUser
        })
        Post._commentTimer = null
        save(LOCAL_POSTS, JSON.stringify(state.data))
      }, random(5000, 30000))
    },
    clearPosts ({ commit }) {
      commit('clear')
    },
    setDefaultPosts ({ commit }) {
      commit('default')
    }
  }
}
