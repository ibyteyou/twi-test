const DefaultDate = '12.12.2021'
const DefaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus.'
const DefaultComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus. Lorem ipsum dolor sit amet'
const DefaultUser = {
  avatar: null,
  name: 'John Doe'
}
const DefaultComments = [{
  text: DefaultComment,
  user: DefaultUser
}, {
  text: DefaultComment,
  user: DefaultUser
}, {
  text: DefaultComment,
  user: DefaultUser
}, {
  text: DefaultComment,
  user: DefaultUser
}]

const DefaultData = [{
  date: DefaultDate,
  content: DefaultText,
  comments: DefaultComments,
  user: DefaultUser
}, {
  date: DefaultDate,
  content: `{IMAGE_PREVIEW}${DefaultText}`,
  comments: DefaultComments,
  user: DefaultUser
}, {
  date: DefaultDate,
  content: DefaultText,
  comments: DefaultComments,
  user: DefaultUser
}]

export default {
  state: {
    data: DefaultData
  },
  getters: {
    posts: (state) => state.data
  }
}
