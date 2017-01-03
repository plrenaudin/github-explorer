const displayError = (vm, error) => {
  let message=''
  if (error.response && error.response.status === 403) {
    message = 'Github Explorer uses the public github API. This has limited access rates per minutes. Please try again in a few seconds...'
  } else {
    message = 'Something went wrong: ' + error.response.data.message
  }
  console.log(message)
  console.error(error)
}

export default {
  displayError
}