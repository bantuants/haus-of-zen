import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.VITE_SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com',
  apiVersion: '2024-10',
  publicAccessToken: process.env.VITE_SHOPIFY_ACCESS_TOKEN || 'your-access-token',
});

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange?: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: string;
        compareAtPrice?: string;
        availableForSale: boolean;
      };
    }>;
  };
  tags: string[];
  productType: string;
  vendor: string;
}

const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price
                compareAtPrice
                availableForSale
              }
            }
          }
          tags
          productType
          vendor
        }
      }
    }
  }
`;

export const fetchProducts = async (): Promise<ShopifyProduct[]> => {
  try {
    const { data } = await client.request(GET_PRODUCTS_QUERY, {
      variables: { first: 20 },
    });

    return data.products.edges.map((edge: { node: ShopifyProduct }) => edge.node);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createCheckout = async (lineItems: Array<{ variantId: string; quantity: number }>) => {
  const CREATE_CHECKOUT_MUTATION = `
    mutation CreateCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  try {
    const { data } = await client.request(CREATE_CHECKOUT_MUTATION, {
      variables: {
        input: {
          lineItems: lineItems.map(item => ({
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        },
      },
    });

    if (data.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new Error(data.checkoutCreate.checkoutUserErrors[0].message);
    }

    return data.checkoutCreate.checkout;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
};