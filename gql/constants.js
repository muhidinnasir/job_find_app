import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const PRODUCTS_WITH_SPECIAL_PRICE = gql`
  query ProductWithSpecialPrice {
    productWithSpecialPrice {
      name
      stockAmount
      originalPrice
      usdPrice
      freeDelivery
      specialPrice {
        id
        startDate
        endDate
        price
        usdPrice
      }
      color {
        id
        name
        image
        size {
          id
          name
          price
          quantity
        }
      }
      id
      image
      productpriceoptionSet {
        id
        quantity
        discount
      }
      averageRating
      ratingCounts
      reviewCounts
      oneStarCounts
      twoStarCounts
      threeStarCounts
      fourStarCounts
      fiveStarCounts
      productrateSet {
        createdAt
        isApproved
        user {
          username
          profilePic
        }
        comment
        rate
      }
      specialPrice {
        id
        startDate
        endDate
        price
        usdPrice
      }
      supplierDomain
      vendor {
        domain
        storeName
        isSupplier
        id
        phone
        callAction
        user {
          id
          username
        }
      }
      sellingPrice
      thumbnail
      productimageSet {
        image
      }
      discount
      description
      category {
        id
        name
        image
      }
      subcategory {
        id
        name
      }
    }
  }
`;