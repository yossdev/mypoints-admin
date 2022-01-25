import React from 'react'

const Pagination = (props) => {
  return (
    <div className="flex justify-center my-5">
      <div className="mr-3">
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
      <div className="mt-2">
        <span>
          {props.start + 1} -{' '}
          {props.start + props.totalRender < props.len
            ? props.start + props.totalRender
            : props.start + (props.len % props.totalRender)}{' '}
          of total {props.len}
        </span>
      </div>
      <div className="ml-3">
        <button
          onClick={props.next}
          className={
            props.start + 1 >= props.len || props.len <= props.totalRender
              ? 'bg-white p-2 rounded-md opacity-60'
              : 'bg-white p-2 rounded-md'
          }
          disabled={
            props.start + 1 >= props.len || props.len <= props.totalRender
              ? true
              : false
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
