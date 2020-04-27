
export const bla = () => {
    console.log('Bla')
}

export const changeModal = () => {
  
    this.setState({
      show : false
    })
    setTimeout(() => {
      this.setState({
        showModal : false,
      })
    }, 800);
    console.log('klik')
  
  }