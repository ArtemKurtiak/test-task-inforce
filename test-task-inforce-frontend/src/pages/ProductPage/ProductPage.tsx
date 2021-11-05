import {Button} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelectorWithTypes} from "../../hooks/useSelectorWithTypes";
import {getCurrentProduct} from "../../store/action-creators/products.action-creator";
import {postApiService} from "../../services/api.service";
import InputItem from "../HomePage/components/InputItem/InputItem";

const ProductPage = () => {
  const currentProduct = useSelectorWithTypes(state => state.products.currentProduct);
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const addComment = async () => {
    if (text) {
      await postApiService(`comments`, {product_id: currentProduct._id, description: text});

      dispatch(getCurrentProduct(currentProduct._id));
    } else {
      alert('Enter text!');
    }
  }

  return <div>
    Name: {currentProduct?.name}
    <br/>
    Amount: {currentProduct?.count}
    <br/>
    Weight: {currentProduct.weight}
    <br/>
    Width: {currentProduct?.size?.width}
    <br/>
    Height: {currentProduct?.size?.height}
    <br/>
    <img src={currentProduct?.imageUrl} width={100} height={100} alt=""/><br/>

    Comments: {
    currentProduct?.comments?.map((el: { description: string }) => {
      return <div>{el.description}</div>
    })
  }
    <InputItem type='text' value={text} handler={setText} placeholder={'Comment text'}/>
    <Button onClick={addComment}>Add</Button>
  </div>
}

export default ProductPage;