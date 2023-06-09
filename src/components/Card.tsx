import { Bomb, Cat, Shuffle, Shield, ShieldQuestion } from 'lucide-react';

type CardProps = {
    color : string,
    name : string
}

const Card = ({color , name} : CardProps) => {
  return (
    <div className=" w-[210px] border-[1px] border-blue-500 p-10 rounded text-center">
        <div className={`p-3 rounded-full bg-[${color}] flex justify-center items-center`}>
            {name === 'card' && <ShieldQuestion className=' text-white h-28 w-28'/>}
            {name === 'Cat Card' && <Cat className=' text-white h-28 w-28'/>}
            {name === 'Exploding Kitten Card' && <Bomb className=' text-white h-28 w-28'/>}
            {name === 'Deffuse Card' && <Shield className=' text-white h-28 w-28'/>}
            {name === 'Shuffle Card' && <Shuffle className=' text-white h-28 w-28'/>}
        </div>
        <h1 className=' mt-5 text-white font-bold text-3xl'>{name}</h1>
    </div>
  )
}

export default Card