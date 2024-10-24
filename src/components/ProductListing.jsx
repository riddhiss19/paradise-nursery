// ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = () => {
    const productsData = [
        {
            category: 'Air Purifying Plants',
            products: [
                {
                    id: 1,
                    name: 'Basil Plant',
                    price: 15,
                    imageUrl: '/images/plants/snake-plant.png',
                    description: 'Produces oxygen at night, medicinal qualities.',
                    isOnSale: true,
                },
                {
                    id: 2,
                    name: 'Spider Plant',
                    price: 12,
                    imageUrl: '/images/plants/spider-plant.png',
                    description: 'Filters formaldehyde and xylene from the air.',
                    isOnSale: true,
                },
                {
                    id: 3,
                    name: 'Peace Lily',
                    price: 18,
                    imageUrl: '/images/plants/peace-lily-plant.png',
                    description: 'Removes mold spores and purifies the air.',
                    isOnSale: true,
                },
            ],
        },
        {
            category: 'Auto Fragrant Plants',
            products: [
                {
                    id: 4,
                    name: 'Lavender',
                    price: 10,
                    imageUrl: '/images/plants/lavender-plant.png',
                    description: 'Lavender has a soothing fragrance that promotes relaxation.',
                    isOnSale: false,
                },
                {
                    id: 5,
                    name: 'Jasmine',
                    price: 20,
                    imageUrl: '/images/plants/jasmine-plant.png',
                    description: 'Jasmine is known for its sweet scent and beautiful flowers.',
                    isOnSale: false,
                },
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
          {productsData.map((categoryData, index) => (
            <div key={index} className="mb-12">
              {/* Display the main heading for each category */}
              <h2 className="text-3xl font-bold mb-8 text-center">{categoryData.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Display the product cards under the current category */}
                {categoryData.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default ProductListing;