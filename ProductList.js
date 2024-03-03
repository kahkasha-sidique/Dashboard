import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../component/action';  // Adjust this path
import './ProductList.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ProductList = ({ addToCart }) => {
  const products = ['Product 1', 'Product 2', 'Product 3','Product4'];
  const price = [4000,1200,3000,7600];
  const image = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zh2b75tmyXk2QMX7UYvvQ6RW7cjVuipBDg&usqp=CAU',
                  'https://courses.iid.org.in/public//uploads/media_manager/612.jpg',
                  'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_09_Top-Universities-offering-free-programming-courses-1.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINndjVUdVDvFIB2QXFHvuyxHh1QYeSKD-5w&usqp=CAU'
                  
                 ];
                 const settings = {
                  dots:true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode:true,
                  showArrow:true
                  
                };
                const handleAddToCart = (product, index) => {
                  const productDetails = {
                    name: product,
                    img: image[index],
                    price: price[index],
                    Quantity: 0,
                  };
                  addToCart(productDetails);
                }

  return (
    <div className='product-list'>
     <center><h2 className='h2'>Product List</h2></center>
     <Slider {...settings}>
      
        {products.map((product, index) => (
          <div className='container-1'>
            {product}{''}
            <img className='img1' src={image[index]}/>
            <h3 className='price-tag'>{price[index]}{' '}</h3>
            <br></br>
           
            <button  className='addtocart-btn' onClick={() => handleAddToCart(product, index)}>Add to Cart</button>
          </div>
          
        ))}
      
      </Slider>
    </div>
  );
};

export default connect(null, { addToCart })(ProductList);