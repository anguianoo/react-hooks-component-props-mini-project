import React from "react"

export default function About({ image, about }) {
  const defaultImg =
    "https://via.placeholder.com/215 (Links to an external site.)"
  return (
    <aside>
      <img src={image !== "" ? image : defaultImg} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}
