import {useParams} from 'react-router-dom'


import Header from '../components/Header';

const ProductDetails = ({data}) => {


    const {id} = useParams();
  return (
    <div>
        <Header />
        {data !== null && (
            <div className="details-box d-flex">
                <div className="image-section">
                    <img src={data?.photo} alt={data?.name} className="details-box__image" />
                </div>
                <div className="details-section">
                    <h1 className="details-section__product-title">
                        Product Title: {data?.name}
                    </h1>
                    <br />
                    <br />
                    <h2 className="details-section__product-title">
                        Details About the Product:
                    </h2>
                    <p>{data?.description}</p>
                    <br />
                    <br />
                    <h3 className="details-section__product-title">
                        The Price of the Product is-
                    </h3>
                    <p>{data?.price}</p>
                    <div className="ingredient__btn">
                        <button className="btn-white">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default ProductDetails