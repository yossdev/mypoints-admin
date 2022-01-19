const AddReward = (props) => {
  const { setAddReward } = props

  return (
    <>
      <button
        onClick={() => setAddReward(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Reward
      </button>
    </>
  )
}

export default AddReward
