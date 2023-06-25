const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercise} 
    </p>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </>
  )
}

export default App