const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus.'

export default {
  state: {
    data: [{
      count: 2,
      text: defaultText
    }, {
      count: 10,
      text: defaultText
    }, {
      count: 4,
      text: defaultText
    }]
  },
  getters: {
    discussions: (state) => state.data
  }
}
