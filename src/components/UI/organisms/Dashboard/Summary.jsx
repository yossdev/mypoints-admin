import flower from '../../../../assets/flower.svg'
import claim from '../../../../assets/claim.svg'
import redeem from '../../../../assets/redeem.svg'
import trans from '../../../../assets/trans.svg'

const Summary = () => {
  return (
    <div className="mb-8 font-roboto">
      <span className="block mb-2 text-xl text-darkgrey font-bold">
        Summary
      </span>

      <div className="flex justify-between">
        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL AGENT
            </p>
            <div className="flex p-3">
              <h3 className="text-4xl mr-5 text-purple font-bold font-poppins">
                {/* {data.admins.agents_aggregate.aggregate} */}
              </h3>
              <img alt="uang" src={flower} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL PRODUCT
            </p>
            <div className="flex p-3">
              <h3 className="text-4xl mr-5 text-purple font-bold font-poppins">
                {/* {props.data.claims.aggregate.count +
                  props.data.redeems.aggregate.count}{' '} */}
                x
              </h3>
              <img alt="uang" src={claim} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL REWARD
            </p>
            <div className="flex p-3">
              <span className="text-4xl mr-5 text-purple font-bold font-poppins">
                {/* {props.data.claims.aggregate.count} x */}
              </span>
              <img alt="uang" src={redeem} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL TRANSACTION
            </p>
            <div className="flex p-3">
              <span className="text-4xl mr-5 text-purple font-bold font-poppins">
                {/* {props.data.redeems.aggregate.count} x */}
              </span>
              <img alt="uang" src={trans} className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
