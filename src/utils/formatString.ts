// function that replaces underscore with white space

const format= (value: string) => {
   return value.replace(/_/g," ")
}

export default format