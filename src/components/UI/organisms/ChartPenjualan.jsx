import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts'

const data = [
  {
    name: 'Januari',
    penjualan: 24,
  },
  {
    name: 'Februari',
    penjualan: 19,
  },
  {
    name: 'Maret',
    penjualan: 98,
  },
  {
    name: 'April',
    penjualan: 39,
  },
  {
    name: 'Mei',
    penjualan: 48,
  },
  {
    name: 'Juni',
    penjualan: 38,
  },
  {
    name: 'Juli',
    penjualan: 43,
  },
  {
    name: 'Agustus',
    penjualan: 43,
  },
  {
    name: 'September',
    penjualan: 43,
  },
  {
    name: 'Oktober',
    penjualan: 43,
  },
  {
    name: 'November',
    penjualan: 43,
  },
  {
    name: 'Desember',
    penjualan: 43,
  },
]

const data2 = [
  { name: 'Bank Transfer', value: 400 },
  { name: 'E-Wallet', value: 300 },
  { name: 'Pulsa / Paket Data', value: 300 },
]

const ChartPenjualan = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-40 sm:grid-cols-2 font-Roboto">
        {/* Bar Chart */}
        <div>
          <div className="w-sm mx-80 absolute mt-72">
            <p className="font-Roboto">Data Penjualan Produk</p>
          </div>
          <ResponsiveContainer
            width="40%"
            height="40%"
            className="w-sm mx-80 absolute mt-80"
          >
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="penjualan" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div>
          <div className="w-sm mx-32 absolute mt-72">
            <p className="font-Roboto">Data Reward redeem</p>
          </div>
          <ResponsiveContainer
            width="40%"
            height="40%"
            className="w-sm mx-12 absolute mt-80 "
          >
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data2}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}
export default ChartPenjualan
