import Card2 from '../../components/module/Card2'

const Home = () => {
  return (
    <div className="w-full h-screen bg-[url('../img/home/bg.webp')] bg-cover bg-center flex flex-col items-center">
      <h1 className="text-white text-4xl mt-8">Get Snacks Now !!</h1>
      <h3 className="text-gray-400 mt-2">The most delicious snacks are available here. Transactions are fast, safe and reliable.Get it soon !</h3>
      <Card2 />
    </div>
  )
}

export default Home