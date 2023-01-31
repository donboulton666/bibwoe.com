const components = {
  h2: props => (
    <h2 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h2>
  ),
}

export default components
