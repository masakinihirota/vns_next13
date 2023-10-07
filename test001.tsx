import { useEffect, useState } from "react"

type Animal = {
  name: string
  age: number
}

type AnimalKeys = keyof Animal

const AnimalViewer = () => {
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [key, setKey] = useState<AnimalKeys>("name")

  useEffect(() => {
    fetch("/api/animal")
      .then((res) => res.json())
      .then((data) => setAnimal(data))
      .catch((error) => console.error(error))
  }, [])

  if (!animal) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={() => setKey("name")}>Show Name</button>
      <button onClick={() => setKey("age")}>Show Age</button>
      <div>{animal[key]}</div>
    </div>
  )
}

export default AnimalViewer
