import {useContext} from 'react';
import {ShopContext} from '../context/context'
import { GoodsItem } from './GoodsItem';

function GoodsList() {
  const { goods = []} = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good}/>
      ))}
    </div>
  );
}

export { GoodsList };
