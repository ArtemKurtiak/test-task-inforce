import {useEffect, useState} from "react";
import {getProductsActionCreator} from "../../store/action-creators/products.action-creator";
import {useSelectorWithTypes} from "../../hooks/useSelectorWithTypes";
import {useDispatch} from "react-redux";
import './styles.scss';
import ProductItem from "./components/ProductItem/ProductItem";
import {postApiService} from "../../services/api.service";
import InputItem from "./components/InputItem/InputItem";
import {InputItemType} from "../../types/Input.type";
import {Button} from "@mui/material";


const HomePage = () => {
  const products = useSelectorWithTypes(state => state.products.products);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(50);
  const [count, setCount] = useState<number>(1);
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    dispatch(getProductsActionCreator());
  }, [dispatch]);

  const addProduct = async () => {
    if (name && weight && width && height && count && url) {

      await postApiService('products', {
        data: {
          name,
          weight,
          size: {
            width,
            height
          },
          count,
          imageUrl: url
        }
      })
      dispatch(getProductsActionCreator());
    } else {
      alert('Some data missing');
    }
  }


  const inputs: InputItemType[] = [
    {
      handler: setName,
      value: name,
      type: 'text',
      placeholder: 'Name'
    },
    {
      handler: setWeight,
      value: weight,
      type: 'text',
      placeholder: 'Weight'
    },
    {
      handler: setWidth,
      value: width,
      type: 'number',
      placeholder: 'Width'
    },
    {
      handler: setHeight,
      value: height,
      type: 'number',
      placeholder: 'Height'
    },
    {
      handler: setCount,
      value: count,
      type: 'number',
      placeholder: 'Count'
    },
    {
      handler: setUrl,
      value: url,
      type: 'text',
      placeholder: 'Url'
    },
  ]

  return <div>
    <div className={'form'} >
      {inputs.map((el: InputItemType) => {
        return <><InputItem {...el} /></>
      })}
      <Button onClick={addProduct} >Add</Button>
    </div>
    {
    products.map((el) => {
      return <ProductItem {...el} />
    })
  }</div>
};

export default HomePage;