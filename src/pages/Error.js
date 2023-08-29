import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function Error() {
  const error = useRouteError()
  return (
    <section>
    <div>
      <h1>An error occured</h1>
      <h3>{`${error.message} due to ${error.statusText}, the status code is ${error.status}`}</h3>
      </div>

    </section>
  )
}
