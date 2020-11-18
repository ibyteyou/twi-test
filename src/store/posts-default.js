const DefaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus.'
export const DefaultComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus. Lorem ipsum dolor sit amet'
export const DefaultUser = {
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

export default [{
  date: 1605700274673,
  content: DefaultText,
  comments: DefaultComments,
  user: DefaultUser
}, {
  date: 1605700274674,
  content: `asdasdhttps://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg
    ${DefaultText}`,
  comments: DefaultComments,
  user: DefaultUser
}, {
  date: 1605700274675,
  content: DefaultText,
  comments: DefaultComments,
  user: DefaultUser
}]
