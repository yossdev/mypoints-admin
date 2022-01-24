import React from 'react'

const Pagination = (props) => {
  return (
    <div className="flex justify-between my-5">
      <div>
        <button
          onClick={props.prev}
          className={
            props.start <= 0
              ? 'bg-white p-2 rounded-md opacity-60'
              : 'bg-white p-2 rounded-md'
          }
          disabled={props.start <= 0 ? true : false}
        >
          Prev
        </button>
      </div>
      <div>
        <button
          onClick={props.next}
          className={
            props.start + 1 >= props.len || props.len <= 10
              ? 'bg-white p-2 rounded-md opacity-60'
              : 'bg-white p-2 rounded-md'
          }
          disabled={
            props.start + 1 >= props.len || props.len <= 10 ? true : false
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
