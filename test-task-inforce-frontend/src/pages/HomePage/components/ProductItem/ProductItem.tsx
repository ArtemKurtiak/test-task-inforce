import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import {getCurrentProduct, getProductsActionCreator} from "../../../../store/action-creators/products.action-creator";
import './styles.scss';
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
import {deleteApiService, postApiService} from "../../../../services/api.service";
import UpdateProductModal from "../../../../components/UpdateProductModal/UpdateProductModal";

type Props = {
  name: string,
  size: {
    width: number,
    height: number
  },
  imageUrl: string,
  _id: string,
  count: number
}

const ProductItem: React.FC<Props> = ({_id, name, imageUrl, size, count}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const deleteHandler = async () => {
    await deleteApiService('products', {product_id: _id});

    dispatch(getProductsActionCreator());

    setDeleteModalVisible(false);
  }

  const updateHandler = async (data: {
    name: string,
    imageUrl: string,
    size: {
      width: number,
      height: number
    },
    count: number
  }) => {
    const {count, imageUrl, size: {width, height}, name} = data;

    if (count && imageUrl && width && height && name) {
      await postApiService('products/update', {
        product_id: _id,
        productData: {
          ...data
        }
      })

      dispatch(getProductsActionCreator());

      setUpdateModalVisible(false);
    } else {
      alert('Some data missing');
    }
  }

  return <div className={'product__item'}>
    Name: {name}
    <br/>
    Width: {size.width}
    <br/>
    Height: {size.height}
    <br/>
    <img src={imageUrl} width={100} height={100} alt=""/>
    <br/>
    <Button onClick={() => {
      dispatch(getCurrentProduct(_id));
      history.push('/product');
    }}
    >Learn more</Button>
    <Button onClick={() => {
      setDeleteModalVisible(true);
    }}
    >Delete</Button>
    <Button onClick={() => {
      setUpdateModalVisible(true);
    }}
    >Edit</Button>
    <DeleteModal
      open={deleteModalVisible}
      setOpen={setDeleteModalVisible}
      deleteHandler={deleteHandler}
    />
    <UpdateProductModal
      open={updateModalVisible}
      setOpen={setUpdateModalVisible}
      data={{
        name,
        size,
        count,
        imageUrl
      }}
      updateHandler={updateHandler}
    />
  </div>
}

export default ProductItem;